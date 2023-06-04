#include <ESP8266WiFi.h>
#include <SPI.h>
#include <Wire.h>
#include <ESP8266WiFi.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"
#include "MAX30105.h"

// Substitua com as suas credenciais do Adafruit IO
#define WIFI_SSID "Pulso Seguro"
#define WIFI_PASS "0123456789"
#define AIO_USERNAME "ClaudioCanga"
#define AIO_KEY "aio_MZxg82KiRS0x01N8XT0CRq8NTI2U"

// Defina as configurações da conexão MQTT
#define MQTT_SERVER "io.adafruit.com"
#define MQTT_PORT 1883
#define MQTT_CLIENT_ID "esp8266-max30102"
#define MQTT_USERNAME AIO_USERNAME
#define MQTT_PASSWORD AIO_KEY

// Crie os objetos WiFiClient e Adafruit_MQTT_Client
WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, MQTT_SERVER, MQTT_PORT, MQTT_CLIENT_ID, MQTT_USERNAME, MQTT_PASSWORD);

// Crie o objeto Adafruit_MQTT_Publish para publicar dados no Adafruit IO
Adafruit_MQTT_Publish bpm = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/bpm1");

// Crie um objeto MAX30105_Pulse para ler os dados do sensor MAX30102
MAX30105 particleSensor;

// Define as configurações do display OLED
#define OLED_RESET D0
Adafruit_SSD1306 display(OLED_RESET);

void setup() {
  Serial.begin(9600);
  delay(1000);
  
  // Conecte-se à rede Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("Conectando à rede Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Conectado à rede Wi-Fi");

  // Inicialize o display OLED
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.display();
  delay(2000);
  display.clearDisplay();

  // Initialize sensor
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) //Use default I2C port, 400kHz speed
  {
    Serial.println("MAX30102 was not found. Please check wiring/power. ");
    while (1);
  }
  Serial.println("Place your index finger on the sensor with steady pressure.");

  particleSensor.setup(); //Configure sensor with default settings
  particleSensor.setPulseAmplitudeRed(0x0A); //Turn Red LED to low to indicate sensor is running
  particleSensor.setPulseAmplitudeGreen(0); //Turn off Green LED


  // Conecte-se ao servidor MQTT
  Serial.print("Conectando ao servidor MQTT...");
  while (!mqtt.connected()) {
    if (mqtt.connect() != 0) {
      Serial.println("falha. Tentando novamente em 5 segundos");
      delay(5000);
    }
  }
  Serial.println("Conectado ao servidor MQTT");

  // Inscreva-se no feed "bpm" do Adafruit IO
  Adafruit_MQTT_Subscribe bpm_sub = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/bpm1");
  mqtt.subscribe(&bpm_sub);
}

void loop() {
  // Leia a frequência cardíaca do sensor MAX30102
  uint32_t irValue = particleSensor.getIR();
  irValue = irValue / 1000;

  // Atualize o display OLED
  display.clearDisplay();
  display.setTextSize(2);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.println("Frequencia Cardiaca");
  display.setTextSize(3);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(20, 30);
  display.println(irValue);
  display.display();
  
  // Publique o valor no feed "bpm" do Adafruit IO
  Serial.print("Publicando no feed 'bpm': ");
  Serial.println(irValue);
  if (!bpm.publish(irValue)) {
    Serial.println("falha ao publicar");
  }
  
  // Aguarde 10 segundos antes de ler novamente
  delay(3000);
}
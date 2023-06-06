#include <ESP8266WiFi.h>
#include <SPI.h>
#include <Wire.h>
#include <ESP8266WiFi.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"
#include "MAX30105.h"
#include <Adafruit_GFX.h>
#include <Adafruit_MLX90614.h>

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
Adafruit_MQTT_Publish temObjecto = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/temObjecto1");
Adafruit_MQTT_Publish temAmbiental = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/temAmbiental1");

Adafruit_MLX90614 mlx;
MAX30105 particleSensor;

void setup() {
  Serial.begin(9600);
  Wire.begin();

  mlx.begin(0x5A); // Define o endereço I2C do sensor MLX90614 como 0x5A
  particleSensor.begin(Wire, I2C_SPEED_FAST, 0x57); // Define o endereço I2C do sensor MAX30102 como 0x57

  // Conecte-se à rede Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("Conectando à rede Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Conectado à rede Wi-Fi");

  // Conecte-se ao servidor MQTT
  Serial.print("Conectando ao servidor MQTT...");
  while (!mqtt.connected()) {
    if (mqtt.connect() != 0) {
      Serial.println("falha. Tentando novamente em 5 segundos");
      delay(5000);
    }
  }
  Serial.println("Conectado ao servidor MQTT");
  particleSensor.setup(); //Configure sensor with default settings
  particleSensor.setPulseAmplitudeRed(0x0A); //Turn Red LED to low to indicate sensor is running
  particleSensor.setPulseAmplitudeGreen(0); //Turn off Green LED


  // Inscreva-se nos feeds do Adafruit IO
  Adafruit_MQTT_Subscribe bpm_sub = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/bpm1");
  Adafruit_MQTT_Subscribe temObjecto_sub = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/temObjecto1");
  Adafruit_MQTT_Subscribe temAmbiental_sub = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/temAmbiental1");
  mqtt.subscribe(&bpm_sub);
  mqtt.subscribe(&temObjecto_sub);
  mqtt.subscribe(&temAmbiental_sub);
}

void loop() {
  // Leia a temperatura do sensor MLX90614
  float ambientTemp = mlx.readAmbientTempC();
  float objectTemp = mlx.readObjectTempC();

  // Leia a frequência cardíaca do sensor MAX30102
  uint32_t irValue = particleSensor.getIR();
  irValue = irValue / 1000;

  // Publique os valores nos feeds correspondentes do Adafruit IO
  Serial.print("Publicando no feed 'bpm': ");
  Serial.println(irValue);
  if (!bpm.publish(irValue)) {
    Serial.println("falha ao publicar");
  }

  Serial.print("Publicando no feed 'temObjecto': ");
  Serial.print(objectTemp);
  Serial.print(" °C");
  if (!temObjecto.publish(objectTemp)) {
    Serial.println("falha ao publicar");
  }

  /*Serial.print("Publicando no feed 'temAmbiental': ");
  Serial.print(ambientTemp);
  Serial.print(" °C");
  if (!temAmbiental.publish(ambientTemp)) {
    Serial.println("falha ao publicar");
  }*/

  delay(1000); // Aguarde 1 segundo antes de ler novamente
}

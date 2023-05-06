import Swal from "sweetalert2";

export const swalConfirmMixin = Swal.mixin({
  customClass: {
    confirmButton: "button-confirm",
  },
  buttonsStyling: false,
});

export const swalGlobal = Swal.mixin({
  customClass: {
    confirmButton: "global-confirm",
    cancelButton: "global-cancel",
  },
  buttonsStyling: false,
});
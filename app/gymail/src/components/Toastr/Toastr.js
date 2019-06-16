import toastr from 'toastr'

export default class Toastr {

    static success(message) {
        this._toastr("success", message)
    }

    static warning(message) {
        this._toastr("warning", message)
    }

    static error(message) {
        this._toastr("error", message)
    }

    static info(message) {
        this._toastr("info", message)
    }

    static _toastr(type, message) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "toastClass": 'toast-style'
        }

        toastr[type](message)
    }

}
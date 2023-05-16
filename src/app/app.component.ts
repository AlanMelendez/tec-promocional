import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tec-promocional';

  private apiUrl: string = 'https://api.waboxapp.com/send/chat';

  constructor() {
  }


  sendMessage(number: string, message: string) {


    // let url:string = ' url = PathConsumo + "https://www.waboxapp.com/api/send/chat?token=7e91ba222e7ff5ffdc12e56a6b5b700663bd892f8f866" +
    // "&uid=5218711169895" +
    // "&to=521" + Tel +
    // "&custom_uid=msg-vta-'" + folio.ToString() + "'-" + Now().ToString("ddMMyyyyHHmmss") +
    // "&text=" + Mensaje';
    let numeroR = Math.floor(Math.random() * 10001);
    let urlWaboxx = `https://www.waboxapp.com/api/send/chat?token=7e91ba222e7ff5ffdc12e56a6b5b700663bd892f8f866&uid=5218711169895&to=521${number}&custom_uid=${numeroR}&text=${message}`


    return fetch(urlWaboxx)
      .then((response) => {

        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado correctamente',
          heightAuto: false,
          showConfirmButton: false,
          footer: '',
          timer: 3000
        })
        response.json()

      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un error intentalo nuevamente.',
          heightAuto: false,
          footer: '',
          timer: 3000
        })
        return error;
      });
  }


  obtenerBeca(){



    Swal.fire({
      title: 'Ingresa tu numero de telefono:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonColor:'brown',
      showCancelButton: true,
      confirmButtonText: 'Enviar Informacion',
      cancelButtonText: 'Cancelar',
      heightAuto: false,
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        this.sendMessage(login,'Fuiste acredor a una beca dentro del instituto, porfavor presentate en las oficinas de servicios escolares con tu papeleria.');
      },
      allowOutsideClick: () => !Swal.isLoading()
    });

    // ).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: `${result.value.login}'s avatar`,
    //       imageUrl: result.value.avatar_url
    //     })
    //   }
    // })


    // Swal.fire({
    //   title: '!Se envio la informacion a tu numero de Whatsapp!',
    //   showClass: {
    //     popup: 'animate__animated animate__fadeInDown'
    //   },
    //   hideClass: {
    //     popup: 'animate__animated animate__fadeOutUp'
    //   },
    //   icon: 'success',
    //   heightAuto: false,
    //   showConfirmButton: false,
    // })
  }

}

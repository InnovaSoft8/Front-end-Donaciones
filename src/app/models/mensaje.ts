export interface Mensaje {
    idMensaje: number;
    idDonante: number;
    idReceptor: number;
    fechaHoraMensaje: Date;
    contenidoMensaje: string;
    estadoMensaje: string;
  }
  
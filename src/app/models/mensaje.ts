export interface Mensaje {
    idMensaje: number;
    idDonanteEmisor: number;
    idVoluntarioEmisor: number;
    idDonanteReceptor: number;
    idVoluntarioReceptor: number;
    fechaHoraMensaje: Date;
    contenidoMensaje: string;
    estadoMensaje: string;
  }
  
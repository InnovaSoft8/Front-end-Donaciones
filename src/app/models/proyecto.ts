export interface Proyecto {
    idProyecto: number;
    nombre: string;
    descripcion: string;
    idReceptor: number;
    idDesastre: number;
    fechaInicio: Date;
    fechaFin: Date;
    montoMeta: number;
    montoRecaudado: number;
  }
  
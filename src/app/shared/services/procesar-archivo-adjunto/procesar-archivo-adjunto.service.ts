import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcesarArchivoAdjuntoService {

  constructor(private http: HttpClient) { }

  procesarArchivoAdjunto(archivoAdjunto: File, numeroDocumento: string) {
    const formData = new FormData();
    formData.append('archivoAdjunto', archivoAdjunto);
    formData.append('numeroDocumento', numeroDocumento);
    return this.http.post(environment.urlProcesarArchivo, formData, {responseType : 'arraybuffer'});
  }
}

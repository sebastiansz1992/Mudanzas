import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProcesarArchivoAdjuntoService } from '../../shared/services/procesar-archivo-adjunto/procesar-archivo-adjunto.service';
import { validarExtension } from '../../shared/utils/utils';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-auditar-viajes',
  templateUrl: './auditar-viajes.component.html',
  styleUrls: ['./auditar-viajes.component.scss']
})
export class AuditarViajesComponent implements OnInit {

  public mudanzasForm: FormGroup;
  public archivoAdjunto: File;
  public documentoIdentidad: string;

  constructor(private procesarArchivoService: ProcesarArchivoAdjuntoService) { }

  ngOnInit() {
    this.mudanzasForm = new FormGroup({
      numeroDocumento: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      archivoAdjunto: new FormControl('', [Validators.required, validarExtension('txt')])
    });
  }

  hasError = (controlName: string, errorName: string) => {
    return this.mudanzasForm.controls[controlName].hasError(errorName);
  }

  procesarArchivoAdjunto() {
    if (this.mudanzasForm.valid) {
      this.documentoIdentidad = this.mudanzasForm.controls.numeroDocumento.value;
      this.procesarArchivoService.procesarArchivoAdjunto(this.archivoAdjunto, this.documentoIdentidad).subscribe((resp: any) => {
        this.descargarArchivoGenerado(resp, 'text/plain');
      });
    }
  }

  descargarArchivoGenerado(data: any, type: string) {
      const blob = new Blob([data], { type: type.toString() });
      saveAs(blob, 'ArchivoSalida.txt');
  }

  obtenerArchivoAdjunto(evento: any) {
    this.archivoAdjunto = evento.target.files[0];
  }

}

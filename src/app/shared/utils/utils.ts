import { FormControl } from '@angular/forms';

export function validarExtension( type: string ) {
    return (control: FormControl) => {
        const file = control.value;
        if ( file ) {
        const extension = file.fileNames.split('.')[1].toLowerCase();
        if ( type.toLowerCase() !== extension.toLowerCase() ) {
            return {
            requiredFileType: true
            };
        }
        return null;
        }
        return null;
    };
}

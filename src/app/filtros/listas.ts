import { list,pacienteAsignados} from './interfacesFiltros';
export class listas {
    radioButtonPacientes: string[] = [
        'Pacientes asignados a un modelo',
        'Pacientes agendados para una fecha',
        'Pacientes por agendar'];
    LstestructuraAdministrativa: list[] = [
        { value: 1, nombre: 'sede centro' },
        { value: 2, nombre: 'sede centro' },
        { value: 3, nombre: 'sede centro' }
      ];

      Lstresponsable: list[] = [
        { value: 1, nombre: 'sede centro' },
        { value: 2, nombre: 'sede centro' },
        { value: 3, nombre: 'sede centro' }
      ];
      Lstespacialidad: list[] = [
        { value: 1, nombre: 'sede centro' },
        { value: 2, nombre: 'sede centro' },
        { value: 3, nombre: 'sede centro' }
      ];

      listaPacientesAsignados :pacienteAsignados[] = [
        {nombrePaciente : 'Juan Perez', generoPaciente : 'Masculino',edadPaciente : 65},
        {nombrePaciente : 'Luz Maria García', generoPaciente : 'Femenino',edadPaciente : 63},
        {nombrePaciente : 'Marta Guzmán', generoPaciente : 'Femenino',edadPaciente : 68},
        {nombrePaciente : 'Marcela Castro', generoPaciente : 'Femenino',edadPaciente : 62},

      ]
}
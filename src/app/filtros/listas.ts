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
        {nombrePaciente : 'juan de jesus', generoPaciente : 'masculino',edadPaciente : 50},
        {nombrePaciente : 'jaime jaime', generoPaciente : 'masculino',edadPaciente : 60},
        {nombrePaciente : 'Maria maria', generoPaciente : 'femenino',edadPaciente : 100},
        {nombrePaciente : 'Marcela Marcel', generoPaciente : 'femenino',edadPaciente : 110},

      ]
}
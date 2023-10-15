import { mapProjectFromApiToVm } from './project.mapper';
import { Project } from './project.vm';

describe('mapper specs', () => {
  const emptyProject = {
    comments: '',
    employees: [],
    externalId: '',
    id: '',
    isActive: false,
    name: '',
  };

  it('should return empty project when it feeds undefined', () => {
    const mappedProject = mapProjectFromApiToVm(undefined);
    expect(mappedProject).toEqual(emptyProject);
  });

  it('should return empty project when it feeds null', () => {
    const mappedProject = mapProjectFromApiToVm(null);
    expect(mappedProject).toEqual(emptyProject);
  });

  it('should return project when it feeds with empty employees', () => {
    const project: Project = {
      id: '1',
      name: 'test',
      externalId: '1',
      isActive: true,
      comments: 'test',
      employees: [],
    };
    const mappedProject = mapProjectFromApiToVm(project);
    expect(mappedProject).toEqual(project);
  });

  it('should return project when is correctly feed', () => {
    const project: Project = {
      id: '1',
      name: 'test',
      externalId: '1',
      isActive: true,
      comments: 'test',
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Noel',
        },
        {
          id: '2',
          isAssigned: true,
          employeeName: 'Pablo',
        },
      ],
    };
    const mappedProject = mapProjectFromApiToVm(project);
    expect(mappedProject).toEqual(project);
  });
});

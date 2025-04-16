import { ImpureJsonPipe } from './impure-json.pipe';

describe('ImpureJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new ImpureJsonPipe();
    expect(pipe).toBeTruthy();
  });
});

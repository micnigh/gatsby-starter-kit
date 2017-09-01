describe(`simple test`, () => {
  it(`should run`, async () => {
    expect(true).toBe(true);
    expect(window).toBeDefined();
  });

  it(`should be in jsdom env`, async () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
});
import parse from '../src/utils/parse';

describe('parse', () => {
  it('should return a custom string parameter', () => {
    const parsedObj = parse(['Email'], { Email: 'test@example.com', plan: 'basic' });
    return expect(parsedObj).toEqual({ Email: 'test@example.com', custom: { 'string--plan': 'basic' } });
  });
  it('should return a custom integer parameter', () => {
    const parsedObj = parse(['Email'], { Email: 'test@example.com', revenue: 200 });
    return expect(parsedObj).toEqual({ Email: 'test@example.com', custom: { 'integer--revenue': 200 } });
  });
  it('should return a custom boolean parameter', () => {
    const parsedObj = parse(['Email'], { Email: 'test@example.com', upgraded: true });
    return expect(parsedObj).toEqual({ Email: 'test@example.com', custom: { 'boolean--upgraded': true } });
  });
  it('should return a custom date parameter', () => {
    const parsedObj = parse(['Email'], { Email: 'test@example.com', upgradedAt: '2018-12-01' });
    return expect(parsedObj).toEqual({ Email: 'test@example.com', custom: { 'date--upgradedAt': '2018-12-01' } });
  });
  it('should handle an existing custom property', () => {
    const parsedObj = parse(['Email', 'custom'], { Email: 'test@example.com', upgradedAt: '2018-12-01', custom: { 'string--plan': 'basic' } });
    return expect(parsedObj).toEqual({ Email: 'test@example.com', custom: { 'date--upgradedAt': '2018-12-01', 'string--plan': 'basic' } });
  });
});

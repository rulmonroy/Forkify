
describe('when testing something', function () {
	var a;

	it('should pass', function () {
		a = true;

		expect(a).toBe(true);
	});

	it('you shall not pass!', function () {
		a = false;

		expect(a).toBe(true);
	});
});

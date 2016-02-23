describe('ColorPicker', function() {
  describe('#getColor(x,y)', function() {
    it('should return the correct color', function(done) {

        var cp = ColorPicker('pic');
        var color = cp.getColor(59,59);
        assert.equal(color[0], 161);
        assert.equal(color[1], 130);
        assert.equal(color[2], 116);
        assert.equal(color[3], 255);
        done();
    });
  });

});

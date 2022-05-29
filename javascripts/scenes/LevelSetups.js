(function() {
	window.breakout = window.breakout || {};

	var r = 'red';
	var b = 'blue';
	var o = 'orange';
	var g = 'green';
	var X = null;

	breakout.LevelSetups = [
		{
			name: "level 1",
			bricks: [
				[X,X,g,X,g,X,X],
				[X,b,X,X,X,b,X],
				[X,X,X,X,X,X,X],
				[X,X,X,b,X,X,X]
			],
			powerUps: 1,
			powerDowns: 1
		},
		{
			name: "level 2",
			bricks: [
				[X,X,X,X,X,X,X],
				[g,X,X,X,X,X,g],
				[X,X,X,X,X,X,X],
				[X,o,X,X,X,r,X],
				[X,X,X,X,X,X,X],
				[X,X,b,X,b,X,X]
				
			],
			powerUps: 3,
			powerDowns: 3
			
		},
		{
			name: 'level 3',
			bricks: [
				
				[r,g,X,X,X,X,g,o],
				[X,X,X,X,X,X,X,X],
				[X,o,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[r,b,X,X,X,X,X,X]
			],
			powerUps: 2,
			powerDowns: 4
		},
		{
			name: 'level 4',
			bricks: [
				[r,X,X,X,o,X,g],
				[X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X],
				[X,X,X,X,X,X,b],
				[X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X],
				[X,X,X,X,X,X,r],
				[X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X],
				[X,X,X,X,X,X,b],
				[X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X],
				[X,X,X,b,X,X,o]
			],
			powerUps: 2,
			powerDowns: 5
		},
		{
			name: 'level 5',
			bricks: [
				[r,g,X,X,X,X,g,o],
				[X,X,X,X,X,X,X,X],
				[X,o,b,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,r,X,X],
				[g,b,X,X,X,X,X,X]
			],
			powerUps: 2,
			powerDowns: 6
		}
		,
		{
			name: 'level 6',
			bricks: [
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,X],
				[X,X,X,X,X,X,X,r],
				[X,X,X,X,X,X,X,g],
				[X,X,X,X,X,X,X,b],
				[X,X,X,X,X,X,X,o],
				[X,X,X,X,X,X,X,r],
				[X,X,X,X,X,X,X,g],
				[X,X,X,X,X,X,X,b],
				[X,X,X,X,X,X,X,o],
				[X,X,X,X,X,X,X,X],
				[r,X,X,X,X,X,g,X],
			],
			powerUps: 1,
			powerDowns: 7
		}
	];
})();




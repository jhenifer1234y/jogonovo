const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.IsJumping
	];
};
self.C3_JsPropNameTable = [
	{fundo: 0},
	{Sólido: 0},
	{caminho: 0},
	{pontos: 0},
	{Plataforma: 0},
	{Sprite: 0}
];

self.InstanceType = {
	fundo: class extends self.ISpriteInstance {},
	caminho: class extends self.ISpriteInstance {},
	pontos: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}
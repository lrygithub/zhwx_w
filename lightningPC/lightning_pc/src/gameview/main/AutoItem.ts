class AutoItem extends eui.Component {
	public autoStopGroup: eui.Group;
	public autoCountLabel: eui.Label;
	public sopAutoBtn: MouseButton;
	public sMainGroup: eui.Group;
	public sGroup: eui.Group;
	public autoBtn: MouseButton;
	public constructor() {
		super();
	}

	public childrenCreated(): void {
		super.childrenCreated();
		for (let i: number = 0; i < 5; i++) {
			let btn: MouseButton = this['btn' + i] as MouseButton;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		}

		this.autoBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver, this);
		this.sGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver, this);
		this.autoBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut, this);
		this.sGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut, this);

		this.sopAutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStop, this);
	}

	public onOver(): void {
		egret.Tween.removeTweens(this.sGroup);
		this.sMainGroup.visible = true;
		egret.Tween.get(this.sGroup).to({ y: 0 }, 300);
	}

	public onOut(e: egret.TouchEvent): void {
		if (!this.sGroup.hitTestPoint(e.stageX, e.stageY) || !this.autoBtn.hitTestPoint(e.stageX, e.stageY)) {
			egret.Tween.removeTweens(this.sGroup);
			egret.Tween.get(this.sGroup).to({ y: 535 }, 300);
		}
	}

	public onTab(e: egret.TouchEvent): void {
		if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
			egret.Tween.get(this.sGroup).to({ y: 535 }, 300);
			GameManager.getInstance().noMoney();
			return;
		}
		switch (e.currentTarget) {
			case this['btn' + 0]:
				vo.GameData.autoPlayCount = 99;
				GameConfig.autoPlay = true;
				this.lastCount = 99;
				break;
			case this['btn' + 1]:
				vo.GameData.autoPlayCount = 50;
				GameConfig.autoPlay = true;
				this.lastCount = 50;
				break;
			case this['btn' + 2]:
				vo.GameData.autoPlayCount = 25;
				GameConfig.autoPlay = true;
				this.lastCount = 25;
				break;
			case this['btn' + 3]:
				vo.GameData.autoPlayCount = 10;
				GameConfig.autoPlay = true;
				this.lastCount = 10;
				break;
			case this['btn' + 4]:
				vo.GameData.autoPlayCount = 100;
				GameConfig.autoPlay = true;
				this.lastCount = 100;
				this.autoCountLabel.text = '直到环节'
				console.log('点击了直到环节')
				break;
		}
		this.autoBtn.visible = false;
		this.autoStopGroup.visible = true;
		this.sMainGroup.visible = false;
		GameManager.getInstance().startGame();
		SoundManager.getInstance().playEffect(SoundConst.AUTOSTART1);
	}

	public lastCount: number;

	public onStop(): void {
		this.autoStopGroup.visible = false;
		this.autoBtn.visible = true;
		vo.GameData.autoPlayCount = 0;
		GameConfig.autoPlay = false;
		SoundManager.getInstance().playEffect(SoundConst.AUTOSTOP1);
	}
    /**
	 * resetDo
	 */
	public resetDo(): void {
		if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
			egret.Tween.get(this.sGroup).to({ y: 535 }, 300);
			GameManager.getInstance().noMoney();
			return;
		}

		vo.GameData.autoPlayCount = this.lastCount;
		this.autoCountLabel.text = vo.GameData.autoPlayCount < 100 ? ''+vo.GameData.autoPlayCount : '直到环节';
		GameConfig.autoPlay = true;
		this.autoBtn.visible = false;
		this.autoStopGroup.visible = true;
		this.sMainGroup.visible = false;
		SoundManager.getInstance().playEffect(SoundConst.AUTOSTART1);
		GameManager.getInstance().startGame();
	}


}
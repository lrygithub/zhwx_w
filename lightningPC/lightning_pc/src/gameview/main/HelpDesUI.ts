class HelpDesUI extends core.BaseUI {
	public bg: eui.Image;
	public closeBtn: MouseButton;
	public scroll: SScroll;
	public contentBg: eui.Image;
	public mainGroup: eui.Group;
	public myScrollBar: MyScrollBar;
	public constructor() {
		super();
		this.skinName = HelpDesSkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.onResize();
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.myScrollBar, egret.Event.CHANGE, this.onScrollBarChange, this);
		this.registerEvent(this.scroll, egret.Event.CHANGE, this.onScrollChange, this);
		//this.scroll.verticalScrollBar=new MyScrollBar();
		this.visible = false;
		NetUI.getInstance().showNetting();
		egret.setTimeout(() => {
			NetUI.getInstance().hideNetting();
			this.visible = true;
		}, this, 400);
	}

	public onResize(): void {
		var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
		var scaleY = (window.innerHeight / GameConfig.DES_HEIGHT) || 0;
		let maxh: number = window.innerHeight - GameConfig.J_HEIGHT;
		let cs: number = scaleX > scaleY ? scaleY : scaleX;
		let t1s = (window.innerHeight - 55) / GameConfig.J_HEIGHT - maxh / GameConfig.HEIGHT;
		let t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
		this.bg.scaleX = cs;
		if (window.innerHeight > GameConfig.J_HEIGHT) {
			this.bg.scaleY = t1s;
		}
		else {
			this.bg.scaleY = t2s;
		}
		let w: number = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * cs : GameConfig.WIDTH;
		this.mainGroup.width = scaleX > scaleY ? w : GameConfig.DES_WIDTH * cs;
		this.mainGroup.height = this.bg.scaleY * this.bg.height;
		this.contentBg.scaleX = this.contentBg.scaleY = this.mainGroup.width / GameConfig.MAX_WIDTH;
		this.onScrollChange();
		this.onScrollBarChange();
		egret.updateAllScreens();
	}

	public onTab(): void {
		let num: number = SoundManager.getInstance().lastVolume;
		SoundManager.getInstance().setBgVolume(SoundManager.getInstance().lastVolume);
		SoundManager.getInstance().setEffectVolume(SoundManager.getInstance().lastVolume);
		core.UIManager.closeUI(core.UIConst.HelpDesUI);
	}

	public onScrollBarChange(): void {
		let value: number = this.myScrollBar.value;
		console.log(value);
		this.scroll.setPerCent(100 - value);
	}

	public onScrollChange(): void {
		let p: number = 100 - this.scroll.getPerCent();
		this.myScrollBar.value = p;
	}
}
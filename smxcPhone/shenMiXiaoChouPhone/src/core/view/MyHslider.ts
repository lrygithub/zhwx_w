class MyHslider extends eui.HSlider
 {	
	 public tsbar:eui.Image;
	public diTu:eui.Image;
	public thumb0:eui.Rect;
	public thumb:eui.Image;
	public tabela:eui.Label;
	public thumb0Dis:eui.Rect;
	public sanjiaoDis:eui.Image;
	public thumbDis:eui.Image;
	public sanjiao:eui.Image;
	public id:any;

	public isPlaying: boolean = false;
	public barl: number;

	public tabelaY:number = 0;
	public thumb0Y:number = 0;
	public sanjiaoY:number = 0;

	public tabelaY1:number = 0;
	public thumb0Y1:number = 0;
	public sanjiaoY1:number = 0;

	public tabelaY2:number = 0;
	public thumb0Y2:number = 0;
	public sanjiaoY2:number = 0;

	public tabelaY3:number = 0;
	public thumb0Y3:number = 0;
	public sanjiaoY3:number = 0;

	public tabelaY4:number = 0;
	public thumb0Y4:number = 0;
	public sanjiaoY4:number = 0;

	
	public constructor()
	 {
		 super();
		 this.$SliderBase['6'] = 0;

		egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onEvent1,this);
	}
	//旋转屏幕黄条的长度
	public onEvent1():void
	{
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
					if(ui.setUI.shiZhi1.tabela.text.length <= 4){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi1.thumb0.scaleX = 1.3;
						}else{			//shu
							ui.setUI.shiZhi1.thumb0.scaleX = 1.2;
						}
						ui.setUI.shiZhi1.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi1.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi1.thumb0.scaleX = 1.7;
						}else{			//shu
							ui.setUI.shiZhi1.thumb0.scaleX = 1.32;
						}
						ui.setUI.shiZhi1.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi1.tabela.text.length == 6){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi1.thumb0.scaleX = 1.9;
						}else{			//shu
							ui.setUI.shiZhi1.thumb0.scaleX = 1.52;
						}
						ui.setUI.shiZhi1.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi1.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi1.thumb0.scaleX = 2.1;
						}else{			//shu
							ui.setUI.shiZhi1.thumb0.scaleX = 1.72;
						}
						ui.setUI.shiZhi1.thumb0.ellipseHeight = 25;
					}
					

					//3333
					if(ui.setUI.shiZhi3.tabela.text.length <= 4){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 1.3;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 1.5;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1.2;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 6){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 1.8;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1.4;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 2.1;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1.7;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 25;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 8){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 2.4;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1.9;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 28;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 9){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 2.73;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 2.1;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 35;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 10){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 3.1;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 2.3;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 40;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 11){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 3.35;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 2.5;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 45;  //改变圆角弧度
					}

					//4444
					if(ui.setUI.shiZhi4.tabela.text.length <= 4){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 1.3;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 1.7;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1.2;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 6){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 1.8;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1.4;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 2.1;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1.7;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 25;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 8){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 2.4;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1.9;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 28;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 9){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 2.73;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 2.1;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 35;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 10){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 3.1;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 2.3;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 40;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 11){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 3.35;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 2.5;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 45;  //改变圆角弧度
					}

					//555
					if(ui.setUI.shiZhi5.tabela.text.length <= 4){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 1.3;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 1.5;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1.2;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 6){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 1.8;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1.4;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 2.1;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1.7;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 25;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 8){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 2.4;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1.9;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 28;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 9){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 2.73;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 2.1;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 35;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 10){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 3.1;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 2.3;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 40;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 11){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 3.35;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 2.5;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 45;  //改变圆角弧度
					}
					this.thumDisPos();
	}
	public onEvent():void
	{
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(window.innerWidth>window.innerHeight)
		{
			// this.currentState='up';			//heng
			// this.width=1920;
			// egret.log("UP");
			ui.setUI.shiZhi1.thumb0.scaleY = 1.15;
			ui.setUI.shiZhi1.thumb0.y = 32.39;
			ui.setUI.shiZhi1.tabela.scaleX = 1.2;
			ui.setUI.shiZhi1.tabela.scaleY = 1.5;
			ui.setUI.shiZhi1.tabela.y = 32.39;
			ui.setUI.shiZhi1.sanjiao.scaleY = 1.7;
			ui.setUI.shiZhi1.sanjiao.y = 46;
			ui.setUI.shiZhi1.sanjiao.scaleX = 2.3;


			ui.setUI.shiZhi2.thumb0.scaleY = 1.15;
			ui.setUI.shiZhi2.thumb0.y = 38.39;
			ui.setUI.shiZhi2.tabela.scaleX = 1.2;
			ui.setUI.shiZhi2.tabela.scaleY = 1.5;
			ui.setUI.shiZhi2.tabela.y = 38.39;
			ui.setUI.shiZhi2.sanjiao.scaleY = 1.7;
			ui.setUI.shiZhi2.sanjiao.y = 46;
			ui.setUI.shiZhi2.sanjiao.scaleX = 2.3;
			
			ui.setUI.shiZhi3.thumb0.scaleY = 1.19;
			ui.setUI.shiZhi3.thumb0.y = 22.4;
			ui.setUI.shiZhi3.tabela.scaleX = 1.2;
			ui.setUI.shiZhi3.tabela.scaleY = 1.5;
			ui.setUI.shiZhi3.tabela.y = 22.4;
			ui.setUI.shiZhi3.sanjiao.scaleY = 1.7;
			ui.setUI.shiZhi3.sanjiao.y = 36;
			ui.setUI.shiZhi3.sanjiao.scaleX = 2.3;

			ui.setUI.shiZhi4.thumb0.scaleY = 1.19;
			ui.setUI.shiZhi4.thumb0.y = 20.56;
			ui.setUI.shiZhi4.tabela.scaleX = 1.2;
			ui.setUI.shiZhi4.tabela.scaleY = 1.5;
			ui.setUI.shiZhi4.tabela.y = 20.56;
			ui.setUI.shiZhi4.sanjiao.scaleY = 1.7;
			ui.setUI.shiZhi4.sanjiao.y = 35.33;
			ui.setUI.shiZhi4.sanjiao.scaleX = 2.3;

			ui.setUI.shiZhi5.thumb0.scaleY = 1.19;
			ui.setUI.shiZhi5.thumb0.y = 18.39;
			ui.setUI.shiZhi5.tabela.scaleX = 1.2;
			ui.setUI.shiZhi5.tabela.scaleY = 1.5;
			ui.setUI.shiZhi5.tabela.y = 18.39;
			ui.setUI.shiZhi5.sanjiao.scaleY = 1.7;
			ui.setUI.shiZhi5.sanjiao.y = 33;
			ui.setUI.shiZhi5.sanjiao.scaleX = 2.3;


		}
		else
		{
			// this.currentState='down';			//shu
			// this.width=1080;
			// egret.log("DOWN");
			ui.setUI.shiZhi1.thumb0.scaleY = 1;
			ui.setUI.shiZhi1.thumb0.y = 39.39;
			ui.setUI.shiZhi1.tabela.scaleX = 0.9;
			ui.setUI.shiZhi1.tabela.scaleY = 1.2;
			ui.setUI.shiZhi1.tabela.y = 39.39;
			ui.setUI.shiZhi1.sanjiao.scaleY = 1.3;
			ui.setUI.shiZhi1.sanjiao.y = 51;
			ui.setUI.shiZhi1.sanjiao.scaleX = 1.3;

			
			ui.setUI.shiZhi2.thumb0.scaleY = 1;
			ui.setUI.shiZhi2.thumb0.y = 34.39;
			ui.setUI.shiZhi2.tabela.scaleX = 0.9;
			ui.setUI.shiZhi2.tabela.scaleY = 1.2;
			ui.setUI.shiZhi2.tabela.y = 34.39;
			ui.setUI.shiZhi2.sanjiao.scaleY = 1.3;
			ui.setUI.shiZhi2.sanjiao.y = 49;
			ui.setUI.shiZhi2.sanjiao.scaleX = 1.3;

			ui.setUI.shiZhi3.thumb0.scaleY = 1;
			ui.setUI.shiZhi3.thumb0.y = 27.4;
			ui.setUI.shiZhi3.tabela.scaleX = 0.9;
			ui.setUI.shiZhi3.tabela.scaleY = 1.2;
			ui.setUI.shiZhi3.tabela.y = 27.4;
			ui.setUI.shiZhi3.sanjiao.scaleY = 1.3;
			ui.setUI.shiZhi3.sanjiao.y = 42;
			ui.setUI.shiZhi3.sanjiao.scaleX = 1.3;

			ui.setUI.shiZhi4.thumb0.scaleY = 1;
			ui.setUI.shiZhi4.thumb0.y = 26.56;
			ui.setUI.shiZhi4.tabela.scaleX = 0.9;
			ui.setUI.shiZhi4.tabela.scaleY = 1.2;
			ui.setUI.shiZhi4.tabela.y = 26.56;
			ui.setUI.shiZhi4.sanjiao.scaleY = 1.3;
			ui.setUI.shiZhi4.sanjiao.y = 41.33;
			ui.setUI.shiZhi4.sanjiao.scaleX = 1.3;

			ui.setUI.shiZhi5.thumb0.scaleY = 1;
			ui.setUI.shiZhi5.thumb0.y = 25.39;
			ui.setUI.shiZhi5.tabela.scaleX = 0.9;
			ui.setUI.shiZhi5.tabela.scaleY = 1.2;
			ui.setUI.shiZhi5.tabela.y = 25.39;
			ui.setUI.shiZhi5.sanjiao.scaleY = 1.3;
			ui.setUI.shiZhi5.sanjiao.y = 40;
			ui.setUI.shiZhi5.sanjiao.scaleX = 1.3;
		}
		this.thumDisPos();

	}
	//自动调整投注的时候，投注条的操作(对应数字金额和滑块的位置)
	public indexValue(num:number):void{
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		this.value = num;
		ui.setUI.shiZhi1.tabela.text = vo.GameData.betScoreArr[this.value]+".00";
		// if(this.name == "sheZhi1"){
				// console.log("this.value === " + this.value);
				this.tabela.text = vo.GameData.betScoreArr[this.value]+".00";
				if(ui.setUI.shiZhi1.tabela.text.length <= 4){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi1.thumb0.scaleX = 1.3;
						}else{			//shu
							ui.setUI.shiZhi1.thumb0.scaleX = 1.2;
						}
						ui.setUI.shiZhi1.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi1.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi1.thumb0.scaleX = 1.7;
						}else{			//shu
							ui.setUI.shiZhi1.thumb0.scaleX = 1.32;
						}
						ui.setUI.shiZhi1.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi1.tabela.text.length == 6){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi1.thumb0.scaleX = 1.9;
						}else{			//shu
							ui.setUI.shiZhi1.thumb0.scaleX = 1.52;
						}
						ui.setUI.shiZhi1.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi1.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi1.thumb0.scaleX = 2.1;
						}else{			//shu
							ui.setUI.shiZhi1.thumb0.scaleX = 1.72;
						}
						ui.setUI.shiZhi1.thumb0.ellipseHeight = 25;
					}
				// egret.log(this.value + " === 投注索引 == " + vo.GameData.betIndex);
				vo.GameData.betIndex = this.value;
				//修改下方每个滑动模块的值
				ui.setUI.danCi2.text = vo.GameData.betScoreArr[this.value]*2000+".00";
				ui.setUI.jia2.text = vo.GameData.betScoreArr[this.value]*20000+".00";
				ui.setUI.jian2.text = vo.GameData.betScoreArr[this.value]*20000+".00";
			

				ui.setUI.shiZhi3.maximum = parseInt(vo.GameData.betScoreArr[this.value]*2000+"") ;
				ui.setUI.shiZhi4.maximum = parseInt(vo.GameData.betScoreArr[this.value]*20000+"");
				ui.setUI.shiZhi5.maximum = parseInt(vo.GameData.betScoreArr[this.value]*20000+"");
				if(parseInt(ui.setUI.danCi2.text)<=parseInt(ui.setUI.shiZhi3.tabela.text)){
					ui.setUI.shiZhi3.tabela.text = ui.setUI.danCi2.text ;

					if(ui.setUI.shiZhi3.tabela.text.length <= 4){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 1.3;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 1.5;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1.2;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 6){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 1.8;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1.4;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 2.1;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1.7;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 25;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 8){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 2.4;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 1.9;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 28;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 9){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 2.73;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 2.1;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 35;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 10){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 3.1;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 2.3;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 40;
					}
					if(ui.setUI.shiZhi3.tabela.text.length == 11){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi3.thumb0.scaleX = 3.35;
						}else{			//shu
							ui.setUI.shiZhi3.thumb0.scaleX = 2.5;
						}
						ui.setUI.shiZhi3.thumb0.ellipseHeight = 45;  //改变圆角弧度
					}
					
					ui.setUI.shiZhi3.value = parseInt(ui.setUI.shiZhi3.tabela.text)
				}
				if(parseInt(ui.setUI.jia2.text)<=parseInt(ui.setUI.shiZhi4.tabela.text)){
					ui.setUI.shiZhi4.tabela.text = ui.setUI.jia2.text ;

					if(ui.setUI.shiZhi4.tabela.text.length <= 4){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 1.3;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 1.7;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1.2;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 6){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 1.8;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1.4;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 2.1;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1.7;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 25;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 8){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 2.4;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 1.9;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 28;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 9){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 2.73;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 2.1;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 35;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 10){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 3.1;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 2.3;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 40;
					}
					if(ui.setUI.shiZhi4.tabela.text.length == 11){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi4.thumb0.scaleX = 3.35;
						}else{			//shu
							ui.setUI.shiZhi4.thumb0.scaleX = 2.5;
						}
						ui.setUI.shiZhi4.thumb0.ellipseHeight = 45;  //改变圆角弧度
					}


					ui.setUI.shiZhi4.value = parseInt(ui.setUI.shiZhi4.tabela.text)
				}
				if(parseInt(ui.setUI.jian2.text)<=parseInt(ui.setUI.shiZhi5.tabela.text)){
					ui.setUI.shiZhi5.tabela.text = ui.setUI.jian2.text ;
					
					if(ui.setUI.shiZhi5.tabela.text.length <= 4){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 1.3;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 1.5;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1.2;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 6){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 1.8;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1.4;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 18;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 2.1;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1.7;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 25;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 8){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 2.4;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 1.9;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 28;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 9){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 2.73;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 2.1;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 35;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 10){
						
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 3.1;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 2.3;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 40;
					}
					if(ui.setUI.shiZhi5.tabela.text.length == 11){
						if(window.innerWidth>window.innerHeight){	//heng
							ui.setUI.shiZhi5.thumb0.scaleX = 3.35;
						}else{			//shu
							ui.setUI.shiZhi5.thumb0.scaleX = 2.5;
						}
						ui.setUI.shiZhi5.thumb0.ellipseHeight = 45;  //改变圆角弧度
					}
					ui.setUI.shiZhi5.value = parseInt(ui.setUI.shiZhi5.tabela.text)
				}
				ui.setUI.shiZhi3.thumb0.anchorOffsetX = ui.setUI.shiZhi3.thumb0.width/2;
				ui.setUI.shiZhi4.thumb0.anchorOffsetX = ui.setUI.shiZhi3.thumb0.width/2;
				ui.setUI.shiZhi5.thumb0.anchorOffsetX = ui.setUI.shiZhi3.thumb0.width/2;	
				ui.touZhuText(this.tabela.text);
				
				
			// }
			ui.setUI.shiZhi1.tsbar.width = ui.setUI.shiZhi1.value/ui.setUI.shiZhi1.maximum*ui.setUI.shiZhi1.diTu.width;
			ui.setUI.shiZhi1.tabela.x = ui.setUI.shiZhi1.tsbar.x+ui.setUI.shiZhi1.tsbar.width;
			ui.setUI.shiZhi1.thumb0.x = ui.setUI.shiZhi1.tabela.x;
			ui.setUI.shiZhi1.sanjiao.x = ui.setUI.shiZhi1.thumb0.x;
			ui.setUI.shiZhi1.tsbar.visible=true;

			ui.setUI.shiZhi2.tsbar.width = ui.setUI.shiZhi2.value/ui.setUI.shiZhi2.maximum*ui.setUI.shiZhi2.diTu.width;
			ui.setUI.shiZhi2.tabela.x = ui.setUI.shiZhi2.tsbar.x+ui.setUI.shiZhi2.tsbar.width;
			ui.setUI.shiZhi2.thumb0.x = ui.setUI.shiZhi2.tabela.x;
			ui.setUI.shiZhi2.sanjiao.x = ui.setUI.shiZhi2.thumb0.x;
			ui.setUI.shiZhi2.tsbar.visible=true;

			ui.setUI.shiZhi3.tsbar.width = ui.setUI.shiZhi3.value/ui.setUI.shiZhi3.maximum*ui.setUI.shiZhi3.diTu.width;
			ui.setUI.shiZhi3.tabela.x = ui.setUI.shiZhi3.tsbar.x+ui.setUI.shiZhi3.tsbar.width;
			ui.setUI.shiZhi3.thumb0.x = ui.setUI.shiZhi3.tabela.x;
			ui.setUI.shiZhi3.sanjiao.x = ui.setUI.shiZhi3.thumb0.x;
			ui.setUI.shiZhi3.tsbar.visible=true;

			ui.setUI.shiZhi4.tsbar.width = ui.setUI.shiZhi4.value/ui.setUI.shiZhi4.maximum*ui.setUI.shiZhi4.diTu.width;
			ui.setUI.shiZhi4.tabela.x = ui.setUI.shiZhi4.tsbar.x+ui.setUI.shiZhi4.tsbar.width;
			ui.setUI.shiZhi4.thumb0.x = ui.setUI.shiZhi4.tabela.x;
			ui.setUI.shiZhi4.sanjiao.x = ui.setUI.shiZhi4.thumb0.x;
			ui.setUI.shiZhi4.tsbar.visible=true;

			ui.setUI.shiZhi5.tsbar.width = ui.setUI.shiZhi5.value/ui.setUI.shiZhi5.maximum*ui.setUI.shiZhi5.diTu.width;
			ui.setUI.shiZhi5.tabela.x = ui.setUI.shiZhi5.tsbar.x+ui.setUI.shiZhi5.tsbar.width;
			ui.setUI.shiZhi5.thumb0.x = ui.setUI.shiZhi5.tabela.x;
			ui.setUI.shiZhi5.sanjiao.x = ui.setUI.shiZhi5.thumb0.x;
			ui.setUI.shiZhi5.tsbar.visible=true;
	}
	private testBtn():void{

		this.tsbar.width = this.barl*this.value/this.maximum;
	}
	

	public childrenCreated():void
	{
		super.childrenCreated();
		
		this.tsbar.visible=false;
		this.tabelaY = this.tabela.y;
		this.thumb0Y = this.thumb0.y;
		this.sanjiaoY = this.sanjiao.y;
		
		// this.maximum = 100;
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// this.addEventListener(egret.Event.CHANGE,this.testBtn,this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e:egret.TouchEvent)=>{
			//let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			//ui.setUI.touZhuScroller.scrollPolicyV = "on";
			
			switch(this.name){
				case "sheZhi1":
					this.barl = ui.setUI.shiZhi1.diTu.width;
				break;
				case "sheZhi2":
					this.barl = ui.setUI.shiZhi2.diTu.width;
				break;
				case "sheZhi3":
					this.barl = ui.setUI.shiZhi3.diTu.width;
				break;
				case "sheZhi4":
					this.barl = ui.setUI.shiZhi4.diTu.width;
				break;
				case "sheZhi5":
					this.barl = ui.setUI.shiZhi5.diTu.width;
				break;
			}
			this.testBtn();
			ui.setUI.touZhuScroller.stopAnimation();
			ui.setUI.isSDong = true;
			ui.setUI.touZhuScroller.enabled=false;
		},this);
		ui.setUI.shiZhi3.maximum = parseInt(vo.GameData.betScoreArr[0]*2000+"") ;
		ui.setUI.shiZhi4.maximum = parseInt(vo.GameData.betScoreArr[0]*20000+"");
		ui.setUI.shiZhi5.maximum = parseInt(vo.GameData.betScoreArr[0]*20000+"");

		this.addEventListener(egret.Event.CHANGE,()=>{
			let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			
			if(this.name == "sheZhi1"){
				this.tabela.text = vo.GameData.betScoreArr[this.value]+".00";
				if(this.tabela.text.length <= 4){
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 1.2;
						}else{			//shu
							this.thumb0.scaleX = 1.2;
						}
						this.thumb0.ellipseHeight = 18;
					}
					if(this.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 1.7;
						}else{			//shu
							this.thumb0.scaleX = 1.32;
						}
						this.thumb0.ellipseHeight = 18;
					}
					if(this.tabela.text.length == 6){
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 1.9;
						}else{			//shu
							this.thumb0.scaleX = 1.52;
						}
						this.thumb0.ellipseHeight = 18;
					}
					if(this.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 2.1;
						}else{			//shu
							this.thumb0.scaleX = 1.72;
						}
						this.thumb0.ellipseHeight = 25;
					}
					this.thumDisPos();
				// egret.log(this.value + " === 投注索引 == " + vo.GameData.betIndex);
				vo.GameData.betIndex = this.value;
				//修改下方每个滑动模块的值
				ui.setUI.danCi2.text = vo.GameData.betScoreArr[this.value]*2000+".00";
				ui.setUI.jia2.text = vo.GameData.betScoreArr[this.value]*20000+".00";
				ui.setUI.jian2.text = vo.GameData.betScoreArr[this.value]*20000+".00";
			

				ui.setUI.shiZhi3.maximum = parseInt(vo.GameData.betScoreArr[this.value]*2000+"") ;
				ui.setUI.shiZhi4.maximum = parseInt(vo.GameData.betScoreArr[this.value]*20000+"");
				ui.setUI.shiZhi5.maximum = parseInt(vo.GameData.betScoreArr[this.value]*20000+"");
				if(parseInt(ui.setUI.danCi2.text)<=parseInt(ui.setUI.shiZhi3.tabela.text)){
					ui.setUI.shiZhi3.tabela.text = ui.setUI.danCi2.text ;
					
					ui.setUI.shiZhi3.value = parseInt(ui.setUI.shiZhi3.tabela.text)
				}
				if(parseInt(ui.setUI.jia2.text)<=parseInt(ui.setUI.shiZhi4.tabela.text)){
					ui.setUI.shiZhi4.tabela.text = ui.setUI.jia2.text ;

					ui.setUI.shiZhi4.value = parseInt(ui.setUI.shiZhi4.tabela.text)
				}
				if(parseInt(ui.setUI.jian2.text)<=parseInt(ui.setUI.shiZhi5.tabela.text)){
					ui.setUI.shiZhi5.tabela.text = ui.setUI.jian2.text ;
					
				
					ui.setUI.shiZhi5.value = parseInt(ui.setUI.shiZhi5.tabela.text)
				}
				ui.setUI.shiZhi3.thumb0.anchorOffsetX = ui.setUI.shiZhi3.thumb0.width/2;
				ui.setUI.shiZhi4.thumb0.anchorOffsetX = ui.setUI.shiZhi3.thumb0.width/2;
				ui.setUI.shiZhi5.thumb0.anchorOffsetX = ui.setUI.shiZhi3.thumb0.width/2;	
				ui.touZhuText(this.tabela.text);
				
			}else if(this.name == "sheZhi2"){
				this.tabela.text = GameConfig.autoPlayArr[this.value]+"";
				
			}else{
				// console.log(ui.setUI.shiZhi3.maximum + " === 初始 === " + this.value);
				this.tabela.text = this.value +".00";
				if(this.tabela.text.length <= 4){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 1.3;
						}else{			//shu
							this.thumb0.scaleX = 1;
						}
						this.thumb0.ellipseHeight = 18;
					}
					if(this.tabela.text.length == 5){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 1.5;
						}else{			//shu
							this.thumb0.scaleX = 1.2;
						}
						this.thumb0.ellipseHeight = 18;
					}
					if(this.tabela.text.length == 6){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 1.8;
						}else{			//shu
							this.thumb0.scaleX = 1.4;
						}
						this.thumb0.ellipseHeight = 18;
					}
					if(this.tabela.text.length == 7){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 2.1;
						}else{			//shu
							this.thumb0.scaleX = 1.7;
						}
						this.thumb0.ellipseHeight = 25;
					}
					if(this.tabela.text.length == 8){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 2.4;
						}else{			//shu
							this.thumb0.scaleX = 1.9;
						}
						this.thumb0.ellipseHeight = 28;
					}
					if(this.tabela.text.length == 9){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 2.73;
						}else{			//shu
							this.thumb0.scaleX = 2.1;
						}
						this.thumb0.ellipseHeight = 35;
					}
					if(this.tabela.text.length == 10){
						
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 3.1;
						}else{			//shu
							this.thumb0.scaleX = 2.3;
						}
						this.thumb0.ellipseHeight = 40;
					}
					if(this.tabela.text.length == 11){
						this.thumb0.scaleX = 2.75;
						if(window.innerWidth>window.innerHeight){	//heng
							this.thumb0.scaleX = 3.35;
						}else{			//shu
							this.thumb0.scaleX = 2.5;
						}
						this.thumb0.ellipseHeight = 45;  //改变圆角弧度
					}
			}
			
			this.tsbar.width = this.value/this.maximum*this.diTu.width;
			this.tabela.x = this.tsbar.x+this.tsbar.width;
			this.thumb0.x = this.tabela.x;
			this.sanjiao.x = this.thumb0.x;
			this.tsbar.visible=true;
			//
		},this);
		this.thumb.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.up,this);
		// this.thumb.addEventListener(egret.TouchEvent.TOUCH_END,this.down,this);
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.down,this);

		//
		// egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onOChange,this);
	}
	public up():void
	{	
		
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(window.innerWidth>window.innerHeight){		//heng
			egret.Tween.get(this.tabela).to({ y: this.tabelaY-50}, 300);
			egret.Tween.get(this.thumb0).to({ y: this.thumb0Y-50}, 300);
			egret.Tween.get(this.sanjiao).to({ y: this.sanjiaoY-50}, 300);
		}else{
			egret.Tween.get(this.tabela).to({ y: this.tabelaY-22}, 300);
			egret.Tween.get(this.thumb0).to({ y: this.thumb0Y-22}, 300);
			egret.Tween.get(this.sanjiao).to({ y: this.sanjiaoY-22}, 300);
		}
		

	}
	public down():void
	{	
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		egret.Tween.get(this.tabela).to({ y: this.tabelaY}, 300);
		egret.Tween.get(this.thumb0).to({ y: this.thumb0Y}, 300);
		egret.Tween.get(this.sanjiao).to({ y: this.sanjiaoY}, 300);

		egret.Tween.get(this.thumb0Dis).to({ y: this.thumb0Y}, 300);
		egret.Tween.get(this.sanjiaoDis).to({ y: this.sanjiaoY}, 300);

		ui.setUI.touZhuScroller.enabled=true;
		
	}

	//
	public l1x: number;
	public l1y: number;
	public l2x: number;
	public l2y: number;
	public svalue: number;
	protected onTrackTouchBegin(event: egret.TouchEvent): void {
		super.onTrackTouchBegin(event);
		this.isPlaying = true;
		this.l1x = event.stageX;
		this.l1y = event.stageY;
		this.svalue = this.value;
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
	}

	protected onTouchEnd(e: egret.TouchEvent): void {
		egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
		egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
		this.isPlaying = false;
		if (e.target.parent != this) {
			this.dispatchEventWith('MyHslider_STOP');
		}
	}

	public onTouchMove(e: egret.TouchEvent): void {

		this.l2x = e.stageX;
		this.l2y = e.stageY;
		var newValue = this.pointToValue(this.l2x - this.l1x, this.l2y - this.l1y);
		newValue += this.svalue;
		newValue = this.nearestValidValue(newValue, this.snapInterval);
		this.updateWhenTouchMove(newValue);
	}

	private thumDisPos(){
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
				

				ui.setUI.shiZhi1.thumbDis.x = ui.setUI.shiZhi1.thumb.x;
				ui.setUI.shiZhi1.thumb0Dis.x = ui.setUI.shiZhi1.thumb0.x;
				ui.setUI.shiZhi1.thumb0Dis.y = ui.setUI.shiZhi1.thumb0.y;
				ui.setUI.shiZhi1.thumb0Dis.scaleX = ui.setUI.shiZhi1.thumb0.scaleX;
				ui.setUI.shiZhi1.thumb0Dis.scaleY = ui.setUI.shiZhi1.thumb0.scaleY;

				ui.setUI.shiZhi1.sanjiaoDis.x = ui.setUI.shiZhi1.sanjiao.x;
				ui.setUI.shiZhi1.sanjiaoDis.y = ui.setUI.shiZhi1.sanjiao.y;
				ui.setUI.shiZhi1.sanjiaoDis.scaleX = ui.setUI.shiZhi1.sanjiao.scaleX;
				ui.setUI.shiZhi1.sanjiaoDis.scaleY = ui.setUI.shiZhi1.sanjiao.scaleY;

				ui.setUI.shiZhi2.thumbDis.x = ui.setUI.shiZhi2.thumb.x;
				
				ui.setUI.shiZhi2.thumb0Dis.x = ui.setUI.shiZhi2.thumb0.x;
				ui.setUI.shiZhi2.thumb0Dis.y = ui.setUI.shiZhi2.thumb0.y;
				ui.setUI.shiZhi2.thumb0Dis.scaleX = ui.setUI.shiZhi2.thumb0.scaleX;
				ui.setUI.shiZhi2.thumb0Dis.scaleY = ui.setUI.shiZhi2.thumb0.scaleY;

				ui.setUI.shiZhi2.sanjiaoDis.x = ui.setUI.shiZhi2.sanjiao.x;
				ui.setUI.shiZhi2.sanjiaoDis.y = ui.setUI.shiZhi2.sanjiao.y;
				ui.setUI.shiZhi2.sanjiaoDis.scaleX = ui.setUI.shiZhi2.sanjiao.scaleX;
				ui.setUI.shiZhi2.sanjiaoDis.scaleY = ui.setUI.shiZhi2.sanjiao.scaleY;

				ui.setUI.shiZhi3.thumbDis.x = ui.setUI.shiZhi3.thumb.x;
				ui.setUI.shiZhi3.thumb0Dis.x = ui.setUI.shiZhi3.thumb0.x;
				ui.setUI.shiZhi3.thumb0Dis.y = ui.setUI.shiZhi3.thumb0.y;
				ui.setUI.shiZhi3.thumb0Dis.scaleX = ui.setUI.shiZhi3.thumb0.scaleX;
				ui.setUI.shiZhi3.thumb0Dis.scaleY = ui.setUI.shiZhi3.thumb0.scaleY;

				ui.setUI.shiZhi3.sanjiaoDis.x = ui.setUI.shiZhi3.sanjiao.x;
				ui.setUI.shiZhi3.sanjiaoDis.y = ui.setUI.shiZhi3.sanjiao.y;
				ui.setUI.shiZhi3.sanjiaoDis.scaleX = ui.setUI.shiZhi3.sanjiao.scaleX;
				ui.setUI.shiZhi3.sanjiaoDis.scaleY = ui.setUI.shiZhi3.sanjiao.scaleY;

				ui.setUI.shiZhi4.thumbDis.x = ui.setUI.shiZhi4.thumb.x;

				ui.setUI.shiZhi4.thumb0Dis.x = ui.setUI.shiZhi4.thumb0.x;
				ui.setUI.shiZhi4.thumb0Dis.y = ui.setUI.shiZhi4.thumb0.y;
				ui.setUI.shiZhi4.thumb0Dis.scaleX = ui.setUI.shiZhi4.thumb0.scaleX;
				ui.setUI.shiZhi4.thumb0Dis.scaleY = ui.setUI.shiZhi4.thumb0.scaleY;
				
				ui.setUI.shiZhi4.sanjiaoDis.x = ui.setUI.shiZhi4.sanjiao.x;
				ui.setUI.shiZhi4.sanjiaoDis.y = ui.setUI.shiZhi4.sanjiao.y;
				ui.setUI.shiZhi4.sanjiaoDis.scaleX = ui.setUI.shiZhi4.sanjiao.scaleX;
				ui.setUI.shiZhi4.sanjiaoDis.scaleY = ui.setUI.shiZhi4.sanjiao.scaleY;

				ui.setUI.shiZhi5.thumbDis.x = ui.setUI.shiZhi5.thumb.x;
				
				ui.setUI.shiZhi5.thumb0Dis.x = ui.setUI.shiZhi5.thumb0.x;
				ui.setUI.shiZhi5.thumb0Dis.y = ui.setUI.shiZhi5.thumb0.y;
				ui.setUI.shiZhi5.thumb0Dis.scaleX = ui.setUI.shiZhi5.thumb0.scaleX;
				ui.setUI.shiZhi5.thumb0Dis.scaleY = ui.setUI.shiZhi5.thumb0.scaleY;
				
				ui.setUI.shiZhi5.sanjiaoDis.x = ui.setUI.shiZhi5.sanjiao.x;
				ui.setUI.shiZhi5.sanjiaoDis.y = ui.setUI.shiZhi5.sanjiao.y;
				ui.setUI.shiZhi5.sanjiaoDis.scaleX = ui.setUI.shiZhi5.sanjiao.scaleX;
				ui.setUI.shiZhi5.sanjiaoDis.scaleY = ui.setUI.shiZhi5.sanjiao.scaleY;

	}



}

+// document.createElement()メソッドはtagNameで指定されたHTMLを生成できる
  // <canvas></canvas>はグラフィックを描画できるHTMLタグ
  let c = document.createElement("canvas");
  // getContextメソッドで描画機能を有効にする
  let ctx = c.getContext("2d");  // 引数2dは2次元のこと
  c.width = 600;
  c.height = 400;
  
  document.body.appendChild(c);
  
  let perm = [];
  
  while (perm.length < 255) {
    // Math.floorは小数点を除外する。Math.random()関数は、0-1(0以上、1未満)の範囲で浮動小数点の疑似乱数を返す。
    while (perm.includes(val = Math.floor(Math.random() * 255)));
    perm.push(val);
  }
  
  let lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
  
  // ノイズ関数(斜面を形作っている)
  let noise = x => {
    // 配列permの要素数は255までに制限している。c.widthは255以上の値になる。従って、配列のindexとしては不適な値が入るため、これを解決するために255で割った余りを配列のindexにしてする。
    x = x * 0.01 % 255;  // 0.01をかけることでギザギザを拡大
    return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
  }
  
  let player = new function() {
    this.x = c.width / 2;
    this.y = 0;
    this.ySpeed = 0;
    this.rot = 0;
    this.rSpeed = 0;
  
    this.img = new Image();
    this.img.src = "images/moto.jpeg";
  
    this.draw = function() {
      let p1 = c.height - noise(t + this.x) * 0.25;
      let p2 = c.height - noise(t + 5 + this.x) * 0.25;
  
      let grounded = 0;
  
      if(p1  - 15 > this.y) {
        this.ySpeed += 0.1;
      } else {
        this.ySpeed -= this.y - (p1- 15);
        this.y = p1 - 15;
  
        grounded = 1;
      }
  
      let angle = Math.atan2((p2 - 15) - this.y, (this.x + 5) - this.x);
      
      this.y += this.ySpeed;
  
      if(grounded) {
        this.rot -= (this.rot - angle) * 0.5;
        this.rSpeed = this.rSpeed - (angle - this.rot);
      }
    
      this.rSpeed += (k.Arrowleft - k.ArrowRight)* 0.5;
      // this.rot -= this.rSpeed * 0.1;
  
      if(this.rot > this.rSpeed)
      
      ctx.save();  // saveしておくことでdrawImageの座標指定が簡単になる
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.drawImage(this.img, -15, -15, 30, 30);
  
      ctx.restore();
    }
  }
  
  let t = 0;
  let speed = 0;
  let k = {ArrowUp: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0};
  
  const loop = () => {
    speed -= (k.ArrowUp - k.ArrowDown) * 0.1;
    t += 5 * speed;
    // fillStyleで塗りつぶしの色を設定
    ctx.fillStyle = "#19f";
    // fillRectは長方形を描画する関数。fillRect(x, y, w, h) xは四角形左上のx座標、yは四角形左上のy座標、wは四角形の幅、hは四角形の高さ
    ctx.fillRect(0, 0, c.width, c.height);
    // window.requestAnimationframe()メソッドは、ブラウザにアニメーションを行いたいことをしらせ、指定した関数を呼び出して次の再描画の前にアニメーションを更新することを要求する
  
    ctx.fillStyle = "black"
    
    ctx.beginPath();
    // context.moveTo(x, y)は新しいサブパスの開始点を座標指定する。
    ctx.moveTo(0, c.height);
  
    for (let i = 0; i < c.width; i++) {
      // context.lineTo(x, y)は直前の座標と指定座標を結ぶ直線を引く
      ctx.lineTo(i, c.height - noise(t + i) * 0.25);  // 0.25倍して高さ調整
    }
  
    // 最後の座標を決めている
    ctx.lineTo(c.width, c.height);
  
    ctx.fill();
  
    player.draw();
    requestAnimationFrame(loop);
  }
  
  onkeydown = d => k[d,key] = 1;
  onkeyup = d => k[d.key] = 0;
  
  loop();
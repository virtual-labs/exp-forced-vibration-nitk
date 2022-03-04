function runPage2() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    push();
    textSize(36);
    textFont("Times");
    text('TWO DEGREE OF FREEDOM SYSTEM',100, 40);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    strokeWeight(0);
    textSize(15);
    fill(230,154,42);
    text('ω1 = ' + spring1.w2.toFixed(4) + " rad/s", 310, 520);
    text('ω2 = ' + spring1.w1.toFixed(4) + " rad/s", 450, 520);
    text('ω/ω1 = ' + (spring1.w/spring1.w2).toFixed(4) + " rad/s", 310, 480)
    
    text('X1/Xst = ' + (abs(spring1.x2/(spring1.F0/spring1.k1))).toFixed(4) , 150, 480)
    text('X1 = ' + (abs(spring1.x2)).toFixed(4) , 150, 520)
    text('Xst = ' + ((spring1.F0/spring1.k1)).toFixed(4) , 150, 560)

    strokeWeight(0.5);    
    line(0, 440, 600, 440)
    line(300,440,300,580)

    spring1.initialise(F0.inp,w.inp,k1.inp,m1.inp,k2.inp,m2.inp);
    spring1.update(t,factor)
    spring1.show(0, 1, 0);
    magFac1.initialise();
    magFac1.draw();
    

    button3.draw()
    button4.draw()

    F0.draw();
    w.draw();
    k1.draw();

    m1.draw();
    k2.draw();
    m2.draw();

    t = t+dt;
    //clear.mousePressed(clearMe);
}

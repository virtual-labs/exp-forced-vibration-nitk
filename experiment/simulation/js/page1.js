function runPage1() {
    background(255);
    image(bg, 0, 0)
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

    push();
    stroke(0, 100);
    for (let i = 20; i < 591; i++) {
        point(i, 480);
        i += 2;
    }
    for (let i = 480; i < 570; i++) {
        point(300, i);
        i += 2;
    }
    pop();

    spring1.initialise(F0.inp,w.inp,k1.inp,m1.inp,k2.inp,m2.inp);
    spring1.update(t, factor);
    spring1.show(0, 1, 0);

    position_graph1.update(spring1.y1);
    position_graph1.draw(255, 0,0)

    position_graph2.update(spring1.y2);
    position_graph2.draw(255, 0, 0)

    strokeWeight(0)

    textSize(14);
    textFont("Comic Sans MS")
    fill(231, 114, 43);
    text('ω2 = ' + spring1.w1.toFixed(4) + " rad/s", 50, 510);
    text('ω1 = ' + spring1.w2.toFixed(4) + " rad/s", 50, 550);
    text('ω/ω2 = ' + (spring1.w/spring1.w1).toFixed(4) + " rad/s", 310, 510)
    strokeWeight(0.5);    
    // line(0, 440, 600, 440)
    // line(300,440,300,580)

    line (spring1.masscoordinates[0], spring1.masscoordinates[1], position_graph1.graphend[0], position_graph1.graphend[1])
    line (spring1.masscoordinates[2], spring1.masscoordinates[3], position_graph2.graphend[0], position_graph2.graphend[1])

    //text('η = ' + (slider_ang_freq.inp / spring1.wn).toFixed(4), 310, 535);
    //text('z = ' + z.inp.toFixed(4), 310, 550);
    fill(0,0,0)
    textSize(20);
    text("FORCED VIBRATION SYSTEM", 115, 110);

    F0.draw();
    w.draw();
    k1.draw();
    m1.draw();
    k2.draw();
    m2.draw();

    button1.draw();
    button2.draw();

    t = t + dt;
}

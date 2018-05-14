import popmotion from "popmotion";

const ball = document.querySelector(".box");
const divStyler = popmotion.styler(ball);
const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

popmotion.listen(ball, "mousedown touchstart").start(e => {
  e.preventDefault();
  popmotion.pointer(ballXY.get()).start(ballXY);
});

popmotion.listen(document, "mouseup touchend").start(() => {
  popmotion
    .spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200
    })
    .start(ballXY);
});

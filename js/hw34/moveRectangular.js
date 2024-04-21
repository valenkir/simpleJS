$(() => {
  const initialPosition = $(".block-to-move").position();
  let leftPosition = initialPosition.left;
  let topPosition = initialPosition.top;

  $(".btn-move").on("click", () => {
    leftPosition = $(".block-to-move").position().left;
    topPosition = $(".block-to-move").position().top;

    if (!leftPosition && topPosition === initialPosition.top) {
      $(".block-to-move").animate({ left: "90%" });
    } else if (leftPosition && topPosition === initialPosition.top) {
      $(".block-to-move").animate({ top: "86%" });
    } else if (leftPosition && topPosition > initialPosition.top) {
      $(".block-to-move").animate({ left: "0" });
    } else if (!leftPosition && topPosition > initialPosition.top) {
      const diff = topPosition - initialPosition.top;
      $(".block-to-move").animate({ top: `-=${diff}` });
      console.log($(".block-to-move").position());
    }
  });
});

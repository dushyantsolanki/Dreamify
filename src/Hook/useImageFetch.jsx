const useImageFetch = async ({ prompt }) => {
  // this are used to send prompt to open Ai
  try {
    const imageDataPost = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          model: "dall-e-3",
          prompt: `${prompt}`,
          n: 1,
          size: "1024x1024",
        }),
      }
    );
    
    let imageData = await imageDataPost.json();

    return imageData.data[0];
  } catch (error) {
    console.log("Hook :: ImageDataFetchHook : ", error);
    return false;
  }
};

export { useImageFetch };

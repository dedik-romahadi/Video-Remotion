import React from "react";
import { Composition } from "remotion";
import { HelloWorld, helloWorldSchema } from "./compositions/HelloWorld";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={helloWorldSchema}
        defaultProps={{
          title: "Halo, Remotion!",
          subtitle: "Video dibuat dengan kode React",
        }}
      />
    </>
  );
};

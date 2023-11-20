import type { MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import { css } from "styled-system/css";

export const meta: MetaFunction = () => {
  return [
    { title: "Daniel Kantor" },
    { name: "description", content: "Daniel Kantor's personal website" },
  ];
};

const Paragraph = ({ children }: { children: ReactNode }) => {
  return (
    <p className={css({ textStyle: "body" })}>
      <span
        className={css({ background: "token(colors.decorativeBackground)" })}
      >
        {children}
      </span>
    </p>
  );
};

const Heading1 = ({ children }: { children: ReactNode }) => {
  return <h1 className={css({ textStyle: "heading1" })}>{children}</h1>;
};

const Heading2 = ({ children }: { children: ReactNode }) => {
  return <h2 className={css({ textStyle: "heading2" })}>{children}</h2>;
};

const Heading3 = ({ children }: { children: ReactNode }) => {
  return <h3 className={css({ textStyle: "heading3" })}>{children}</h3>;
};

const BlackSection = ({ children }: { children: ReactNode }) => {
  return <section className={css({ background: "black" })}>{children}</section>;
};

const BlackSectionParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <p className={css({ textStyle: "body", color: "white" })}>{children}</p>
  );
};

export default function Index() {
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        lectus in ex dignissim scelerisque. Vestibulum pretium purus eu rhoncus
        volutpat. Maecenas viverra dictum leo, sit amet euismod turpis hendrerit
        dapibus. Vivamus leo justo, cursus ac cursus vel, rhoncus vitae orci.
        Praesent lectus ipsum, posuere ac dui ut, aliquet porttitor nunc. Donec
        scelerisque pharetra sem, et lacinia lorem aliquet at. Aenean lacinia
        dignissim est, in sodales eros porttitor at. Morbi interdum nisi lectus,
        accumsan congue nunc tincidunt quis. Morbi cursus est velit, nec luctus
        nunc iaculis eu. Vivamus auctor non dolor quis hendrerit. Pellentesque
        vel pulvinar tellus. Maecenas felis urna, fringilla ut pellentesque a,
        gravida id elit. Quisque tempus arcu arcu.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        lectus in ex dignissim scelerisque. Vestibulum pretium purus eu rhoncus
        volutpat. Maecenas viverra dictum leo, sit amet euismod turpis hendrerit
        dapibus. Vivamus leo justo, cursus ac cursus vel, rhoncus vitae orci.
        Praesent lectus ipsum, posuere ac dui ut, aliquet porttitor nunc. Donec
        scelerisque pharetra sem, et lacinia lorem aliquet at. Aenean lacinia
        dignissim est, in sodales eros porttitor at. Morbi interdum nisi lectus,
        accumsan congue nunc tincidunt quis. Morbi cursus est velit, nec luctus
        nunc iaculis eu. Vivamus auctor non dolor quis hendrerit. Pellentesque
        vel pulvinar tellus. Maecenas felis urna, fringilla ut pellentesque a,
        gravida id elit. Quisque tempus arcu arcu.
      </Paragraph>
      <Heading1>Hello World!</Heading1>
      <Paragraph>
        Nam tristique aliquam libero, feugiat posuere elit vulputate vel. Morbi
        tincidunt ex malesuada sem fringilla, vitae fringilla nibh tincidunt.
        Donec eu mollis nisl. Fusce iaculis rutrum nibh ac vehicula. Integer in
        eros hendrerit turpis fringilla facilisis aliquet sit amet turpis.
        Pellentesque posuere, lacus vel ultrices imperdiet, nibh erat pharetra
        mauris, eu blandit diam nisl quis erat. Donec in faucibus diam. Aenean
        sed ante vestibulum, porta magna eu, feugiat nisl. Praesent non
        consequat tellus, rutrum facilisis leo. In ultrices imperdiet mi, id
        pellentesque neque porta in.
      </Paragraph>
      <Paragraph>
        Nulla tortor nisi, finibus quis euismod sit amet, luctus vel lectus.
        Morbi at odio eget nibh fermentum mattis. Suspendisse at dictum lorem.
        Ut ipsum odio, fermentum consectetur elementum quis, suscipit id metus.
        Etiam convallis finibus magna, quis gravida ipsum faucibus ac. Nam
        condimentum nibh sit amet magna tincidunt, nec luctus ipsum bibendum.
        Pellentesque congue nisl sem, rhoncus congue arcu tristique ac.
        Vestibulum hendrerit in justo ut sodales.
      </Paragraph>
      <Paragraph>
        Aenean condimentum nunc ante, gravida aliquet lorem iaculis ut. Aliquam
        vel placerat arcu. Maecenas tristique porta nunc, id lobortis risus
        tempus sed. Duis finibus turpis vel diam varius, in dignissim lectus
        ultricies. Maecenas eget nisi bibendum sapien placerat aliquet ut vel
        augue. Curabitur non turpis tristique, egestas velit id, pellentesque
        dolor. Suspendisse tempus gravida cursus.
      </Paragraph>
      <Heading2>Lorem ipsum dolor sit amet</Heading2>
      <Paragraph>
        Suspendisse potenti. Aenean lacinia in ligula sit amet feugiat. Nunc
        ultrices vitae est sed ullamcorper. Nulla nunc nibh, gravida ac ante
        molestie, ultrices tempus nulla. Sed nec tincidunt quam. Sed id nunc mi.
        Praesent blandit tortor in ligula accumsan ullamcorper. Quisque non
        velit a sem ullamcorper malesuada. Aenean ut quam augue. Morbi magna
        nisl, venenatis et diam vitae, fringilla maximus lectus. Donec varius in
        nibh in maximus. Nulla eget justo ac mi malesuada semper id ac ex. Nam
        et porttitor enim.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        lectus in ex dignissim scelerisque. Vestibulum pretium purus eu rhoncus
        volutpat. Maecenas viverra dictum leo, sit amet euismod turpis hendrerit
        dapibus. Vivamus leo justo, cursus ac cursus vel, rhoncus vitae orci.
        Praesent lectus ipsum, posuere ac dui ut, aliquet porttitor nunc. Donec
        scelerisque pharetra sem, et lacinia lorem aliquet at. Aenean lacinia
        dignissim est, in sodales eros porttitor at. Morbi interdum nisi lectus,
        accumsan congue nunc tincidunt quis. Morbi cursus est velit, nec luctus
        nunc iaculis eu. Vivamus auctor non dolor quis hendrerit. Pellentesque
        vel pulvinar tellus. Maecenas felis urna, fringilla ut pellentesque a,
        gravida id elit. Quisque tempus arcu arcu.
      </Paragraph>
      <Paragraph>
        Nam tristique aliquam libero, feugiat posuere elit vulputate vel. Morbi
        tincidunt ex malesuada sem fringilla, vitae fringilla nibh tincidunt.
        Donec eu mollis nisl. Fusce iaculis rutrum nibh ac vehicula. Integer in
        eros hendrerit turpis fringilla facilisis aliquet sit amet turpis.
        Pellentesque posuere, lacus vel ultrices imperdiet, nibh erat pharetra
        mauris, eu blandit diam nisl quis erat. Donec in faucibus diam. Aenean
        sed ante vestibulum, porta magna eu, feugiat nisl. Praesent non
        consequat tellus, rutrum facilisis leo. In ultrices imperdiet mi, id
        pellentesque neque porta in.
      </Paragraph>
      <Paragraph>
        Nulla tortor nisi, finibus quis euismod sit amet, luctus vel lectus.
        Morbi at odio eget nibh fermentum mattis. Suspendisse at dictum lorem.
        Ut ipsum odio, fermentum consectetur elementum quis, suscipit id metus.
        Etiam convallis finibus magna, quis gravida ipsum faucibus ac. Nam
        condimentum nibh sit amet magna tincidunt, nec luctus ipsum bibendum.
        Pellentesque congue nisl sem, rhoncus congue arcu tristique ac.
        Vestibulum hendrerit in justo ut sodales.
      </Paragraph>
      <Paragraph>
        Aenean condimentum nunc ante, gravida aliquet lorem iaculis ut. Aliquam
        vel placerat arcu. Maecenas tristique porta nunc, id lobortis risus
        tempus sed. Duis finibus turpis vel diam varius, in dignissim lectus
        ultricies. Maecenas eget nisi bibendum sapien placerat aliquet ut vel
        augue. Curabitur non turpis tristique, egestas velit id, pellentesque
        dolor. Suspendisse tempus gravida cursus.
      </Paragraph>
      <BlackSection>
        <BlackSectionParagraph>
          Suspendisse potenti. Aenean lacinia in ligula sit amet feugiat. Nunc
          ultrices vitae est sed ullamcorper. Nulla nunc nibh, gravida ac ante
          molestie, ultrices tempus nulla. Sed nec tincidunt quam. Sed id nunc
          mi. Praesent blandit tortor in ligula accumsan ullamcorper. Quisque
          non velit a sem ullamcorper malesuada. Aenean ut quam augue. Morbi
          magna nisl, venenatis et diam vitae, fringilla maximus lectus. Donec
          varius in nibh in maximus. Nulla eget justo ac mi malesuada semper id
          ac ex. Nam et porttitor enim.
        </BlackSectionParagraph>
      </BlackSection>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        lectus in ex dignissim scelerisque. Vestibulum pretium purus eu rhoncus
        volutpat. Maecenas viverra dictum leo, sit amet euismod turpis hendrerit
        dapibus. Vivamus leo justo, cursus ac cursus vel, rhoncus vitae orci.
        Praesent lectus ipsum, posuere ac dui ut, aliquet porttitor nunc. Donec
        scelerisque pharetra sem, et lacinia lorem aliquet at. Aenean lacinia
        dignissim est, in sodales eros porttitor at. Morbi interdum nisi lectus,
        accumsan congue nunc tincidunt quis. Morbi cursus est velit, nec luctus
        nunc iaculis eu. Vivamus auctor non dolor quis hendrerit. Pellentesque
        vel pulvinar tellus. Maecenas felis urna, fringilla ut pellentesque a,
        gravida id elit. Quisque tempus arcu arcu.
      </Paragraph>
      <Heading3>Potato potahto</Heading3>
      <Paragraph>
        Nam tristique aliquam libero, feugiat posuere elit vulputate vel. Morbi
        tincidunt ex malesuada sem fringilla, vitae fringilla nibh tincidunt.
        Donec eu mollis nisl. Fusce iaculis rutrum nibh ac vehicula. Integer in
        eros hendrerit turpis fringilla facilisis aliquet sit amet turpis.
        Pellentesque posuere, lacus vel ultrices imperdiet, nibh erat pharetra
        mauris, eu blandit diam nisl quis erat. Donec in faucibus diam. Aenean
        sed ante vestibulum, porta magna eu, feugiat nisl. Praesent non
        consequat tellus, rutrum facilisis leo. In ultrices imperdiet mi, id
        pellentesque neque porta in.
      </Paragraph>
      <Paragraph>
        Nulla tortor nisi, finibus quis euismod sit amet, luctus vel lectus.
        Morbi at odio eget nibh fermentum mattis. Suspendisse at dictum lorem.
        Ut ipsum odio, fermentum consectetur elementum quis, suscipit id metus.
        Etiam convallis finibus magna, quis gravida ipsum faucibus ac. Nam
        condimentum nibh sit amet magna tincidunt, nec luctus ipsum bibendum.
        Pellentesque congue nisl sem, rhoncus congue arcu tristique ac.
        Vestibulum hendrerit in justo ut sodales.
      </Paragraph>
      <Paragraph>
        Aenean condimentum nunc ante, gravida aliquet lorem iaculis ut. Aliquam
        vel placerat arcu. Maecenas tristique porta nunc, id lobortis risus
        tempus sed. Duis finibus turpis vel diam varius, in dignissim lectus
        ultricies. Maecenas eget nisi bibendum sapien placerat aliquet ut vel
        augue. Curabitur non turpis tristique, egestas velit id, pellentesque
        dolor. Suspendisse tempus gravida cursus.
      </Paragraph>
      <Paragraph>
        Suspendisse potenti. Aenean lacinia in ligula sit amet feugiat. Nunc
        ultrices vitae est sed ullamcorper. Nulla nunc nibh, gravida ac ante
        molestie, ultrices tempus nulla. Sed nec tincidunt quam. Sed id nunc mi.
        Praesent blandit tortor in ligula accumsan ullamcorper. Quisque non
        velit a sem ullamcorper malesuada. Aenean ut quam augue. Morbi magna
        nisl, venenatis et diam vitae, fringilla maximus lectus. Donec varius in
        nibh in maximus. Nulla eget justo ac mi malesuada semper id ac ex. Nam
        et porttitor enim.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        lectus in ex dignissim scelerisque. Vestibulum pretium purus eu rhoncus
        volutpat. Maecenas viverra dictum leo, sit amet euismod turpis hendrerit
        dapibus. Vivamus leo justo, cursus ac cursus vel, rhoncus vitae orci.
        Praesent lectus ipsum, posuere ac dui ut, aliquet porttitor nunc. Donec
        scelerisque pharetra sem, et lacinia lorem aliquet at. Aenean lacinia
        dignissim est, in sodales eros porttitor at. Morbi interdum nisi lectus,
        accumsan congue nunc tincidunt quis. Morbi cursus est velit, nec luctus
        nunc iaculis eu. Vivamus auctor non dolor quis hendrerit. Pellentesque
        vel pulvinar tellus. Maecenas felis urna, fringilla ut pellentesque a,
        gravida id elit. Quisque tempus arcu arcu.
      </Paragraph>
      <Paragraph>
        Nam tristique aliquam libero, feugiat posuere elit vulputate vel. Morbi
        tincidunt ex malesuada sem fringilla, vitae fringilla nibh tincidunt.
        Donec eu mollis nisl. Fusce iaculis rutrum nibh ac vehicula. Integer in
        eros hendrerit turpis fringilla facilisis aliquet sit amet turpis.
        Pellentesque posuere, lacus vel ultrices imperdiet, nibh erat pharetra
        mauris, eu blandit diam nisl quis erat. Donec in faucibus diam. Aenean
        sed ante vestibulum, porta magna eu, feugiat nisl. Praesent non
        consequat tellus, rutrum facilisis leo. In ultrices imperdiet mi, id
        pellentesque neque porta in.
      </Paragraph>
      <Paragraph>
        Nulla tortor nisi, finibus quis euismod sit amet, luctus vel lectus.
        Morbi at odio eget nibh fermentum mattis. Suspendisse at dictum lorem.
        Ut ipsum odio, fermentum consectetur elementum quis, suscipit id metus.
        Etiam convallis finibus magna, quis gravida ipsum faucibus ac. Nam
        condimentum nibh sit amet magna tincidunt, nec luctus ipsum bibendum.
        Pellentesque congue nisl sem, rhoncus congue arcu tristique ac.
        Vestibulum hendrerit in justo ut sodales.
      </Paragraph>
      <Paragraph>
        Aenean condimentum nunc ante, gravida aliquet lorem iaculis ut. Aliquam
        vel placerat arcu. Maecenas tristique porta nunc, id lobortis risus
        tempus sed. Duis finibus turpis vel diam varius, in dignissim lectus
        ultricies. Maecenas eget nisi bibendum sapien placerat aliquet ut vel
        augue. Curabitur non turpis tristique, egestas velit id, pellentesque
        dolor. Suspendisse tempus gravida cursus.
      </Paragraph>
      <Paragraph>
        Suspendisse potenti. Aenean lacinia in ligula sit amet feugiat. Nunc
        ultrices vitae est sed ullamcorper. Nulla nunc nibh, gravida ac ante
        molestie, ultrices tempus nulla. Sed nec tincidunt quam. Sed id nunc mi.
        Praesent blandit tortor in ligula accumsan ullamcorper. Quisque non
        velit a sem ullamcorper malesuada. Aenean ut quam augue. Morbi magna
        nisl, venenatis et diam vitae, fringilla maximus lectus. Donec varius in
        nibh in maximus. Nulla eget justo ac mi malesuada semper id ac ex. Nam
        et porttitor enim.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        lectus in ex dignissim scelerisque. Vestibulum pretium purus eu rhoncus
        volutpat. Maecenas viverra dictum leo, sit amet euismod turpis hendrerit
        dapibus. Vivamus leo justo, cursus ac cursus vel, rhoncus vitae orci.
        Praesent lectus ipsum, posuere ac dui ut, aliquet porttitor nunc. Donec
        scelerisque pharetra sem, et lacinia lorem aliquet at. Aenean lacinia
        dignissim est, in sodales eros porttitor at. Morbi interdum nisi lectus,
        accumsan congue nunc tincidunt quis. Morbi cursus est velit, nec luctus
        nunc iaculis eu. Vivamus auctor non dolor quis hendrerit. Pellentesque
        vel pulvinar tellus. Maecenas felis urna, fringilla ut pellentesque a,
        gravida id elit. Quisque tempus arcu arcu.
      </Paragraph>
      <Paragraph>
        Nam tristique aliquam libero, feugiat posuere elit vulputate vel. Morbi
        tincidunt ex malesuada sem fringilla, vitae fringilla nibh tincidunt.
        Donec eu mollis nisl. Fusce iaculis rutrum nibh ac vehicula. Integer in
        eros hendrerit turpis fringilla facilisis aliquet sit amet turpis.
        Pellentesque posuere, lacus vel ultrices imperdiet, nibh erat pharetra
        mauris, eu blandit diam nisl quis erat. Donec in faucibus diam. Aenean
        sed ante vestibulum, porta magna eu, feugiat nisl. Praesent non
        consequat tellus, rutrum facilisis leo. In ultrices imperdiet mi, id
        pellentesque neque porta in.
      </Paragraph>
      <Paragraph>
        Nulla tortor nisi, finibus quis euismod sit amet, luctus vel lectus.
        Morbi at odio eget nibh fermentum mattis. Suspendisse at dictum lorem.
        Ut ipsum odio, fermentum consectetur elementum quis, suscipit id metus.
        Etiam convallis finibus magna, quis gravida ipsum faucibus ac. Nam
        condimentum nibh sit amet magna tincidunt, nec luctus ipsum bibendum.
        Pellentesque congue nisl sem, rhoncus congue arcu tristique ac.
        Vestibulum hendrerit in justo ut sodales.
      </Paragraph>
      <Paragraph>
        Aenean condimentum nunc ante, gravida aliquet lorem iaculis ut. Aliquam
        vel placerat arcu. Maecenas tristique porta nunc, id lobortis risus
        tempus sed. Duis finibus turpis vel diam varius, in dignissim lectus
        ultricies. Maecenas eget nisi bibendum sapien placerat aliquet ut vel
        augue. Curabitur non turpis tristique, egestas velit id, pellentesque
        dolor. Suspendisse tempus gravida cursus.
      </Paragraph>
      <Paragraph>
        Suspendisse potenti. Aenean lacinia in ligula sit amet feugiat. Nunc
        ultrices vitae est sed ullamcorper. Nulla nunc nibh, gravida ac ante
        molestie, ultrices tempus nulla. Sed nec tincidunt quam. Sed id nunc mi.
        Praesent blandit tortor in ligula accumsan ullamcorper. Quisque non
        velit a sem ullamcorper malesuada. Aenean ut quam augue. Morbi magna
        nisl, venenatis et diam vitae, fringilla maximus lectus. Donec varius in
        nibh in maximus. Nulla eget justo ac mi malesuada semper id ac ex. Nam
        et porttitor enim.
      </Paragraph>
    </div>
  );
}

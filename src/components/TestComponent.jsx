import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

const TestCompomnent = () => {
  const theme = useTheme();
  // const showText = useMediaQuery('(min-width:500px) and (max-width:600px)');
  const showText = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <h3>TEST COMPONENT!!!</h3>
      {showText && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          perspiciatis! Repudiandae amet iure error itaque inventore fugiat,
          nostrum enim incidunt facere ipsam a eligendi, illo earum neque ad
          iusto quaerat.
        </p>
      )}
    </>
  );
};

export default TestCompomnent;

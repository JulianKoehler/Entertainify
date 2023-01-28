import { Grid } from "react-loader-spinner";

const ContentLoaderSpinner = () => {
  return (
    <Grid
      height="60"
      width="60"
      color="var(--greyish-blue)"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default ContentLoaderSpinner;

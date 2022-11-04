import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Layout(props: any) {
  return (
    <>
      <ResponsiveAppBar />
      {props.children}
    </>
  );
}

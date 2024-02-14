import breakWebPage from "website-breaker";

export const BreakButton = () => {
  return (
    <button
      id="break-website-button"
      class="btn"
      onClick={() => breakWebPage()}
    >
      Break Me
    </button>
  );
};

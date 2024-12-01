import breakWebPage from "@oc-2/website-breaker";

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
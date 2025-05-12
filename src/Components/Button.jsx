function Component({ label, url, kind }) {
  if (kind === "primary") {
    return <a href={url} className="button-primary">{label}</a>
  }
  return <a href={url} className="button-secondary">{label}</a>;
}

export default Component;

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-full md:justify-start md:px-32 lg:px-52 py-24">
      <div className="mockup-code text-sm">
        <pre data-prefix="1">
          <code>yarn load data</code>
        </pre>
        <pre data-prefix="2">
          <code>preparing...</code>
        </pre>
        <pre data-prefix="3" className="bg-warning text-warning-content">
          <code>Opps!, this route doesn't exist</code>
        </pre>
      </div>
    </div>
  );
}

export default function Tips() {
  return (
    <div className="mx-auto my-12 max-w-[600px]">
      <div>Supported keywords:</div>
      <ul className="list-disc pl-8">
        <li>
          <span className="text-sky-400">palette</span>, boolean. Filter icon sets by palette.
          Example queries:{' '}
          <span className="text-red-900">
            &ldquo;home palette=false&rdquo;, &ldquo;cat palette=true&rdquo;
          </span>
          .
        </li>
        <li>
          <span className="text-sky-400">style:</span> &ldquo;fill&rdquo; or &ldquo;stroke&rdquo;.
          Filter icons by code. Example queries:{' '}
          <span className="text-red-900">
            &ldquo;home style=fill&rdquo;, &ldquo;cat style=stroke&rdquo;
          </span>
          .
        </li>
        <li>
          <span className="text-sky-400">fill and stroke, boolean:</span> Same as above, but as
          boolean. Only one of keywords can be set: &ldquo;
          <span className="text-red-900">home fill=true</span>
          &rdquo;.
        </li>
        <li>
          <span className="text-sky-400">prefix, string:</span> Same as prefix property from search
          query parameters, but in keyword. Overrides parameter.
        </li>
        <li>
          <span className="text-sky-400">prefixes, string:</span> Same as prefixes property from
          search query parameters, but in keyword. Overrides parameter.
        </li>
      </ul>
    </div>
  )
}

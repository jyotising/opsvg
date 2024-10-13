
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M11.1346 3.49506C11.5197 2.82977 12.4802 2.82977 12.8654 3.49506L22.131 19.4992C22.5169 20.1659 22.0359 21.0002 21.2655 21.0002H2.73441C1.96407 21.0002 1.48301 20.1659 1.86898 19.4992L11.1346 3.49506Z" fillRule="evenodd" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'triangle',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  
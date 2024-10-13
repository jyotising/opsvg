
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M7.5 6H16.5C16.5 6 18.1816 7.5056 19.5 8C20.4323 8.3496 22 8.5 22 8.5C22 8.5 21.0919 8.82435 20.5 9C19.7282 9.229 18.5 9.5 18.5 9.5H12H5.5C5.5 9.5 4.27183 9.229 3.5 9C2.90803 8.82435 2 8.5 2 8.5C2 8.5 3.56775 8.3496 4.5 8C5.8184 7.5056 7.5 6 7.5 6Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9 6L12 2L15 6H9Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M5.5 9.5V19" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M18.5 9.5V19" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M21 19H3V22H21V19Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'chinese-pavilion',
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
  

    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M2 22H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M6.5 7H17.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8 7H12H16L18 22H6L8 7Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M7.5 12H16.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M6.5 17H17.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M16 7L18 22" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8 7L6 22" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 4L12.4142 3.58578C12.7893 3.21071 13.298 3 13.8285 3H14.1715C14.702 3 15.2107 2.78929 15.5858 2.41422L16 2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'chimney',
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
  
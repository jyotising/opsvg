
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M21.5 16.5V9.5H2.5V20.5C2.5 21.0523 2.94771 21.5 3.5 21.5H12" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2.5 5C2.5 4.44771 2.94771 4 3.5 4H20.5C21.0523 4 21.5 4.44771 21.5 5V9.5H2.5V5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8 2.5V6.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M16 2.5V6.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M15 19.5C16.933 19.5 18.5 17.933 18.5 16C18.5 14.067 16.933 12.5 15 12.5C13.067 12.5 11.5 14.067 11.5 16C11.5 17.933 13.067 19.5 15 19.5Z" stroke="#333333" strokeWidth="2"/>
	<path d="M18 18.5L21 21" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'inspection',
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
  
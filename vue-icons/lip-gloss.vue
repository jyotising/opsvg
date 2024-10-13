
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 6H4C4 6 4 8 4.5 13C5 18 6 22 6 22H10C10 22 11 18 11.5 13C12 8 12 6 12 6Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21 17H14C14 17 14 18 14.5 19.5C15 21 15.75 22 15.75 22H19.25C19.25 22 20 21 20.5 19.5C21 18 21 17 21 17Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M17.5 17V6.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M15.5 3.5H19.5L18.5 6.5H16.5L15.5 3.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M10.5 3H5.5V6H10.5V3Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'lip-gloss',
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
  

    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M5 5C5.25 6.5 5.5 7.25 5.75 9C5.95 10.4 6 12.5834 6 13.5C4.91666 14 2.5 15 2.5 17C2.5 19 5 21.5 12 21.5C19 21.5 21.5 19 21.5 17C21.5 15 18 13.5 18 13.5C18 13.5 18 10.75 18.25 9C18.5 7.25 18.75 6.5 19 5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M18 13.5C18 15.5 17.5 17.5 11.75 17.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 7.5C15.866 7.5 19 6.38071 19 5C19 3.61929 15.866 2.5 12 2.5C8.13401 2.5 5 3.61929 5 5C5 6.38071 8.13401 7.5 12 7.5Z" stroke="#333333" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'magic-hat',
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
  
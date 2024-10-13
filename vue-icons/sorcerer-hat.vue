
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 20C17.5229 20 22 19.1046 22 18C22 17.2806 20.3506 16.6498 17.5 16.2974L13.5 6L7.5 4L9 7L6.5 16.2974C3.6494 16.6498 2 17.2806 2 18C2 19.1046 6.47715 20 12 20Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'sorcerer-hat',
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
  
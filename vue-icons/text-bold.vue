
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 12C14.7528 12 16.9844 9.7614 16.9844 7C16.9844 4.23857 14.7528 2 12 2H5.5V12H12Z" fillRule="evenodd" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M14.0156 22C16.7684 22 19 19.7614 19 17C19 14.2386 16.7684 12 14.0156 12H5.5V22H14.0156Z" fillRule="evenodd" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'text-bold',
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
  
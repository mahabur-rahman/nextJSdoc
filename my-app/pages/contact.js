import Footer from "@/components/Footer";

function Contact() {
  return <h1 className="content">contact page</h1>;
}

export default Contact;

Contact.getLayout = (page) => (
  <>
    {page}
    <Footer />
  </>
);

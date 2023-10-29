import { Container } from "@/components/Container";
import { Slider } from "@/components/Home/Testimonials/Slider";
import { getUsers } from "@/data";

export const Testimonials = async () => {
  const users = await getUsers({
    limit: 6,
    select: ["email", "address", "lastName", "firstName", "image"],
  });

  return (
    <Container className="py-12">
      <h3 className="text-center">Client Testimonials</h3>
      <Slider
        slides={users.map((user) => ({
          id: user.id,
          image: user.image,
          name: `${user.firstName} ${user.lastName}`,
          jobTitle: user.email,
          quote: `${user.address.address}, ${user.address.city}, ${user.address.state}`,
        }))}
      />
    </Container>
  );
};

import { render, screen } from "@/__tests__/utils/customRender";
import { faker } from "@faker-js/faker";
import { Publication } from "./";
describe("Component: Publications", () => {
  it("should be able to render a publication", () => {
    const publication = {
      companyPhoto: faker.image.url(),
      userPhoto: faker.image.url(),
      companyName: faker.company.name(),
      createdAt: faker.date.recent().toString(),
      description: faker.lorem.paragraphs(),
      post: faker.image.url(),
      username: faker.person.firstName(),
    };
    render(
      <Publication.Root>
        <Publication.Header data={publication} />
        <Publication.Image data={publication} />
        <Publication.Actions />
        <Publication.Description data={publication} />
      </Publication.Root>
    );

    expect(screen.getByText(publication.companyName)).toBeTruthy();
    expect(screen.getByText(publication.createdAt)).toBeTruthy();
    expect(screen.getByText(publication.description)).toBeTruthy();
    expect(screen.getByText(publication.username)).toBeTruthy();
  });
});

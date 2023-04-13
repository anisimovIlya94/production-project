import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ArticleDetailsComments } from "./ArticleDetailsComments"

export default {
	title: "pages/ArticleDetailsComments",
	component: ArticleDetailsComments,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
	<ArticleDetailsComments {...args} />
)

export const Normal = Template.bind({})
Normal.args = {id: "1"}
Normal.decorators = [StoreDecorator({
	articleDetailsPage: {
		comments: {
			ids: ["1", "2", "3"],
			entities: {
				1: {
					id:"1",
					text:"some comment",
					user: {
						id:"1",
						username: "admin",
						avatar:"https://cq.ru/storage/uploads/posts/961737/fr.jpg"
					}
				},
				2: {
					id:"2",
					text:"some comment",
					user: {
						id:"1",
						username: "admin",
						avatar:"https://cq.ru/storage/uploads/posts/961737/fr.jpg"
					}
				},
				3: {
					id:"3",
					text:"some comment",
					user: {
						id:"1",
						username: "admin",
						avatar:"https://cq.ru/storage/uploads/posts/961737/fr.jpg"
					}
				}
			}
		}
	}
})]

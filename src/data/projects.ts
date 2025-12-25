// 项目数据配置文件
// 用于管理项目展示页面的数据

// 定义项目接口，描述项目对象的结构
export interface Project {
	id: string; // 项目唯一标识符
	title: string; // 项目标题
	description: string; // 项目描述
	image: string; // 项目图片路径或URL
	category: "web" | "mobile" | "desktop" | "other"; // 项目分类：网页、移动应用、桌面应用、其他
	techStack: string[]; // 使用的技术栈数组
	status: "completed" | "in-progress" | "planned"; // 项目状态：已完成、进行中、计划中
	liveDemo?: string; // 在线演示链接（可选）
	sourceCode?: string; // 源代码链接（可选）
	startDate: string; // 项目开始日期，格式为YYYY-MM-DD
	endDate?: string; // 项目结束日期（可选），格式为YYYY-MM-DD
	featured?: boolean; // 是否为精选/特色项目（可选）
	tags?: string[]; // 项目标签数组（可选）
	visitUrl?: string; // 前往项目链接字段（可选）
}

// 项目数据数组，包含所有项目的详细信息
export const projectsData: Project[] = [
	{
		id: "tooldelta-panel", // 项目唯一ID
		title: "ToolDelta Panel", // 项目标题
		description: "使用 Python 编写的租赁服插件加载机器人 点击github按钮查看开源地址", // 项目描述
		image: "/assets/projects/tooldelta.png", // 项目图片路径（当前为空）
		category: "web", // 项目分类：网页应用
		techStack: ["天劫飛飛", "Fbeck", "浪兔", "一个高质量的神秘人"], // 使用的技术栈
		status: "completed", // 项目状态：已完成
		sourceCode: "https://github.com/ToolDelta-Basic/ToolDelta", // GitHub源代码链接
		visitUrl: "https://qm.qq.com/q/RmPLK5BFYI", // 前往项目链接
		startDate: "2025-07 -27", // 开始日期：2024年1月1日
		endDate: "", // 结束日期：2024年6月1日
		featured: true, // 精选项目
		tags: ["Blog", "Theme", "Open Source"], // 项目标签：博客、主题、开源
	},
	{
		id: "fatalder-panel", // 项目唯一ID
		title: "Fatalder Panel", // 项目标题
		description: "使用 GO 编写的 我的世界中国版全平台且支持全部格式的导入导出工具", // 项目描述
		image: "/assets/projects/fatalder.png", // 项目图片路径（当前为空）
		category: "web", // 项目分类：网页应用
		techStack: ["天劫飛飛", "Fbeck", "浪兔", "一个高质量的神秘人"], // 使用的技术栈
		status: "completed", // 项目状态：已完成
		visitUrl: "https://qm.qq.com/q/Sm5bW850su", // 前往项目链接
		startDate: "2023-09-01", // 开始日期：2023年9月1日
		endDate: "2023-12-01", // 结束日期：2023年12月1日
		featured: true, // 精选项目
		tags: ["Portfolio", "React", "Animation"], // 项目标签：作品集、React、动画
	},
	{
		id: "axiomego-panel", // 项目唯一ID
		title: "AxiomEgo Panel", // 项目标题
		description: "一款操作简单便捷的我的世界中国版导入导出工具。", // 项目描述
		image: "/assets/projects/ae.png", // 项目图片路径（当前为空）
		category: "web", // 项目分类：移动应用
		techStack: ["天劫飛飛"], // 使用的技术栈
		status: "completed", // 项目状态：进行中
		visitUrl: "https://qm.qq.com/q/XGNz7v3hsY", // 前往项目链接
		startDate: "2024-03-01", // 开始日期：2024年3月1日
		// 注意：此项目没有endDate、liveDemo、sourceCode、visitUrl、featured和tags字段，因为它们是可选的
		tags: ["Mobile", "Productivity", "Team Collaboration"], // 项目标签：移动应用、生产力、团队协作
	},
	{
		id: "BlockLikes", // 项目唯一ID
		title: "方块赞-BlockLikes", // 项目标题
		description: "为租赁服与玩家提供小心心与访客增加服务", // 项目描述
		image: "/assets/projects/blocklikes.jpg", // 项目图片路径（当前为空）
		category: "mobile", // 项目分类：网页应用
		techStack: ["天劫飛飛", "无邪大得很", "神秘の开发者"], // 使用的技术栈
		status: "completed", // 项目状态：已完成
		visitUrl: "https://qm.qq.com/q/ZacdPgnUQy", // 前往项目链接
		startDate: "2023-06-01", // 开始日期：2023年6月1日
		// 注意：此项目没有sourceCode、featured字段，因为它们是可选的
		featured: true, // 精选项目
		tags: ["Data Visualization", "Analytics", "Charts"], // 项目标签：数据可视化、分析、图表
	},
	{
		id: "无邪空岛一条龙", // 项目唯一ID
		title: "无邪空岛一条龙", // 项目标题
		description: "圈内空岛系统天花板，没有之一7000+cb，全断链优化实装", // 项目描述
		image: "/assets/projects/dc7ad5e8fe5aefcde0d1645519f7d37d.png", // 项目图片路径（当前为空）
		category: "mobile", // 项目分类：网页应用
		techStack: ["无邪大得很"], // 使用的技术栈
		status: "completed", // 项目状态：计划中
		visitUrl: "https://blog.wuxie233.com/posts/%E7%A9%BA%E5%B2%9B%E4%B8%80%E6%9D%A1%E9%BE%99/#%E7%A9%BA%E5%B2%9B%E4%B8%80%E6%9D%A1%E9%BE%99%E7%B3%BB%E7%BB%9F---%E5%AE%8C%E6%95%B4%E4%BB%8B%E7%BB%8D", // 前往项目链接
		startDate: "2024-07-01", // 开始日期：2024年7月1日
		// 注意：此项目是计划中的项目，所以没有endDate、liveDemo、sourceCode、visitUrl、featured字段
		tags: ["E-commerce", "Full Stack", "Payment Integration"], // 项目标签：电子商务、全栈、支付集成
	},
];

// 获取项目统计信息的函数
export const getProjectStats = () => {
	const total = projectsData.length; // 计算项目总数
	const completed = projectsData.filter((p) => p.status === "completed").length; // 统计已完成的项目数量
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length; // 统计进行中的项目数量
	const planned = projectsData.filter((p) => p.status === "planned").length; // 统计计划中的项目数量

	// 返回统计结果对象
	return {
		total, // 项目总数
		byStatus: { // 按状态分类的数量
			completed, // 已完成数量
			inProgress, // 进行中数量
			planned, // 计划中数量
		},
	};
};

// 按分类获取项目的函数
export const getProjectsByCategory = (category?: string) => {
	// 如果没有指定分类或分类为"all"，则返回所有项目
	if (!category || category === "all") {
		return projectsData;
	}
	// 否则返回指定分类的项目
	return projectsData.filter((p) => p.category === category);
};

// 获取精选项目的函数
export const getFeaturedProjects = () => {
	// 返回所有标记为精选的项目
	return projectsData.filter((p) => p.featured);
};

// 获取所有技术栈的函数
export const getAllTechStack = () => {
	const techSet = new Set<string>(); // 创建Set用于去重
	
	// 遍历所有项目
	projectsData.forEach((project) => {
		// 遍历每个项目的技术栈
		project.techStack.forEach((tech) => {
			techSet.add(tech); // 将技术添加到Set中（自动去重）
		});
	});
	
	// 将Set转换为数组并排序后返回
	return Array.from(techSet).sort();
};
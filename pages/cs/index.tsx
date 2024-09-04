import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Stack } from '@mui/material';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';
import withLayoutBasic from '../../libs/components/layout/LayoutBasic';
import { NoticeArticlesPanelList } from '../../libs/components/cs/Notice';
import Faq from '../../libs/components/cs/Faq';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GET_NOTICES } from '../../apollo/user/query';
import { T } from '../../libs/types/common';
import { useQuery } from '@apollo/client';
import { Notices } from '../../libs/types/notice/notice';
import { NoticesInquiry } from '../../libs/types/notice/notice.input';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});


	const CS: NextPage = ({ initialInquiry, ...props }: any) => {
		const [noticesInquiry, setNoticesInquiry] = useState<NoticesInquiry>(initialInquiry);
		const [notices, setNotices] = useState<Notices[]>([]);
		const [total, setTotal] = useState<number>(0);
		const router = useRouter();
	const device = useDeviceDetect();



	/** APOLLO REQUEST */

	const {
		loading: getNoticesLoading,
		data: getNoticesData,
		refetch: getNoticesRefetch,
		error: getNoticesError,
	} = useQuery(GET_NOTICES, {
		fetchPolicy: 'network-only', // by default cache-first
		variables: { input: { ...noticesInquiry } },
		notifyOnNetworkStatusChange: true,
		onCompleted: (data: T) => {
			setNotices(data?.getNotices?.list || []);
			setTotal(data?.getNotices?.metaCounter[0]?.total || 0);
		},
	});
console.log(getNoticesData, "+++++++++++++");

	/** HANDLERS **/
	const changeTabHandler = (tab: string) => {
		router.push(
			{
				pathname: '/cs',
				query: { tab: tab },
			},
			undefined,
			{ scroll: false },
		);
	};
	const tab = router.query.tab ?? 'notice';

	if (device === 'mobile') {
		return <h1>CS PAGE MOBILE</h1>;
	} else {
		return (
			<Stack className={'cs-page'}>
				<Stack className={'container'}>
					<Box component={'div'} className={'cs-main-info'}>
						<Box component={'div'} className={'info'}>
							<span>Cs center</span>
							<p>I will answer your questions</p>
						</Box>
						<Box component={'div'} className={'btns'}>
							<div
								className={tab == 'notice' ? 'active' : ''}
								onClick={() => {
									changeTabHandler('notice');
								}}
							>
								Notice
							</div>
							<div
								className={tab == 'faq' ? 'active' : ''}
								onClick={() => {
									changeTabHandler('faq');
								}}
							>
								FAQ
							</div>
						</Box>
					</Box>

					<Box component={'div'} className={'cs-content'}>
						{tab === 'notice' && <NoticeArticlesPanelList notices={notices} anchorEl={undefined} menuIconClickHandler={undefined} menuIconCloseHandler={undefined} updateNoticeHandler={undefined} removeNoticeHandler={undefined} />}

						{tab === 'faq' && <Faq />}
					</Box>
				</Stack>
			</Stack>
		);
	}
};

CS.defaultProps = {
	initialInquiry: {
		page: 1,
		limit: 10,
	},
};


export default withLayoutBasic(CS);

import React, { FC } from 'react';
import { Row, Col } from 'antd';

import {
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
  ForwardOutlined,
  BackwardOutlined,
  RollbackOutlined,
  EnterOutlined,
  RetweetOutlined,
  SwapOutlined,
  SwapLeftOutlined,
  SwapRightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  UpSquareOutlined,
  DownSquareOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BorderBottomOutlined,
  BorderHorizontalOutlined,
  BorderInnerOutlined,
  BorderOuterOutlined,
  BorderLeftOutlined,
  BorderRightOutlined,
  BorderTopOutlined,
  BorderVerticleOutlined,
  PicCenterOutlined,
  PicLeftOutlined,
  PicRightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  QuestionOutlined,
  QuestionCircleOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  PauseOutlined,
  PauseCircleOutlined,
  MinusOutlined,
  MinusCircleOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  InfoOutlined,
  InfoCircleOutlined,
  ExclamationOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  CloseSquareOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  IssuesCloseOutlined,
  StopOutlined,
  EditOutlined,
  FormOutlined,
  CopyOutlined,
  ScissorOutlined,
  DeleteOutlined,
  SnippetsOutlined,
  DiffOutlined,
  HighlightOutlined,
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BgColorsOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  RedoOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  LineHeightOutlined,
  DashOutlined,
  SmallDashOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  DragOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  RadiusSettingOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  FallOutlined,
  RiseOutlined,
  StockOutlined,
  BoxPlotOutlined,
  FundOutlined,
  SlidersOutlined,
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  WeiboSquareOutlined,
  WeiboCircleOutlined,
  TaobaoCircleOutlined,
  Html5Outlined,
  WeiboOutlined,
  TwitterOutlined,
  WechatOutlined,
  YoutubeOutlined,
  AlipayCircleOutlined,
  TaobaoOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumWorkmarkOutlined,
  GitlabOutlined,
  MediumOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  DropboxOutlined,
  FacebookOutlined,
  CodepenOutlined,
  CodeSandboxOutlined,
  AmazonOutlined,
  GoogleOutlined,
  CodepenCircleOutlined,
  AlipayOutlined,
  AntDesignOutlined,
  AntCloudOutlined,
  AliyunOutlined,
  ZhihuOutlined,
  SlackOutlined,
  SlackSquareOutlined,
  BehanceOutlined,
  BehanceSquareOutlined,
  DribbbleOutlined,
  DribbbleSquareOutlined,
  InstagramOutlined,
  YuqueOutlined,
  AlibabaOutlined,
  YahooOutlined,
  RedditOutlined,
  SketchOutlined,
  AccountBookOutlined,
  AimOutlined,
  AlertOutlined,
  ApartmentOutlined,
  ApiOutlined,
  AppstoreAddOutlined,
  AppstoreOutlined,
  AudioOutlined,
  AudioMutedOutlined,
  AuditOutlined,
  BankOutlined,
  BarcodeOutlined,
  BarsOutlined,
  BellOutlined,
  BlockOutlined,
  BookOutlined,
  BorderOutlined,
  BorderlessTableOutlined,
  BranchesOutlined,
  BugOutlined,
  BuildOutlined,
  BulbOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  CameraOutlined,
  CarOutlined,
  CarryOutOutlined,
  CiCircleOutlined,
  CiOutlined,
  ClearOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
  CloudServerOutlined,
  CloudSyncOutlined,
  CloudUploadOutlined,
  ClusterOutlined,
  CodeOutlined,
  CoffeeOutlined,
  CommentOutlined,
  CompassOutlined,
  CompressOutlined,
  ConsoleSqlOutlined,
  ContactsOutlined,
  ContainerOutlined,
  ControlOutlined,
  CopyrightCircleOutlined,
  CopyrightOutlined,
  CreditCardOutlined,
  CrownOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  DeleteColumnOutlined,
  DeleteRowOutlined,
  DeliveredProcedureOutlined,
  DeploymentUnitOutlined,
  DesktopOutlined,
  DingtalkOutlined,
  DisconnectOutlined,
  DislikeOutlined,
  DollarCircleOutlined,
  DollarOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  EnvironmentOutlined,
  EuroCircleOutlined,
  EuroOutlined,
  ExceptionOutlined,
  ExpandAltOutlined,
  ExpandOutlined,
  ExperimentOutlined,
  ExportOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  FieldBinaryOutlined,
  FieldNumberOutlined,
  FieldStringOutlined,
  FieldTimeOutlined,
  FileAddOutlined,
  FileDoneOutlined,
  FileExcelOutlined,
  FileExclamationOutlined,
  FileOutlined,
  FileGifOutlined,
  FileImageOutlined,
  FileJpgOutlined,
  FileMarkdownOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileProtectOutlined,
  FileSearchOutlined,
  FileSyncOutlined,
  FileTextOutlined,
  FileUnknownOutlined,
  FileWordOutlined,
  FileZipOutlined,
  FilterOutlined,
  FireOutlined,
  FlagOutlined,
  FolderAddOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  FolderViewOutlined,
  ForkOutlined,
  FormatPainterOutlined,
  FrownOutlined,
  FunctionOutlined,
  FundProjectionScreenOutlined,
  FundViewOutlined,
  FunnelPlotOutlined,
  GatewayOutlined,
  GifOutlined,
  GiftOutlined,
  GlobalOutlined,
  GoldOutlined,
  GroupOutlined,
  HddOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
  HourglassOutlined,
  IdcardOutlined,
  ImportOutlined,
  InboxOutlined,
  InsertRowAboveOutlined,
  InsertRowBelowOutlined,
  InsertRowLeftOutlined,
  InsertRowRightOutlined,
  InsuranceOutlined,
  InteractionOutlined,
  KeyOutlined,
  LaptopOutlined,
  LayoutOutlined,
  LikeOutlined,
  LineOutlined,
  LinkOutlined,
  Loading3QuartersOutlined,
  LoadingOutlined,
  LockOutlined,
  MacCommandOutlined,
  MailOutlined,
  ManOutlined,
  MedicineBoxOutlined,
  MehOutlined,
  MenuOutlined,
  MergeCellsOutlined,
  MessageOutlined,
  MobileOutlined,
  MoneyCollectOutlined,
  MonitorOutlined,
  MoreOutlined,
  NodeCollapseOutlined,
  NodeExpandOutlined,
  NodeIndexOutlined,
  NotificationOutlined,
  NumberOutlined,
  OneToOneOutlined,
  PaperClipOutlined,
  PartitionOutlined,
  PayCircleOutlined,
  PercentageOutlined,
  PhoneOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  PoundCircleOutlined,
  PoundOutlined,
  PoweroffOutlined,
  PrinterOutlined,
  ProfileOutlined,
  ProjectOutlined,
  PropertySafetyOutlined,
  PullRequestOutlined,
  PushpinOutlined,
  QrcodeOutlined,
  ReadOutlined,
  ReconciliationOutlined,
  RedEnvelopeOutlined,
  ReloadOutlined,
  RestOutlined,
  RobotOutlined,
  RocketOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
  SaveOutlined,
  ScanOutlined,
  ScheduleOutlined,
  SearchOutlined,
  SecurityScanOutlined,
  SelectOutlined,
  SendOutlined,
  SettingOutlined,
  ShakeOutlined,
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  SisternodeOutlined,
  SkinOutlined,
  SmileOutlined,
  SolutionOutlined,
  SoundOutlined,
  SplitCellsOutlined,
  StarOutlined,
  SubnodeOutlined,
  SwitcherOutlined,
  SyncOutlined,
  TableOutlined,
  TabletOutlined,
  TagOutlined,
  TagsOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToTopOutlined,
  ToolOutlined,
  TrademarkCircleOutlined,
  TrademarkOutlined,
  TransactionOutlined,
  TranslationOutlined,
  TrophyOutlined,
  UngroupOutlined,
  UnlockOutlined,
  UploadOutlined,
  UsbOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  VerifiedOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
  WalletOutlined,
  WhatsAppOutlined,
  WifiOutlined,
  WomanOutlined,
} from '@ant-design/icons';

// import styles from './style.less';

const IconSymbol: FC = () => {
  return (
    <Row>
      {/*<CaretUpOutlined*/}
      {/*  className="icon"*/}
      {/*  symbolName={'1.General/2.Icons/1.CaretUpOutlined'}*/}
      {/*/>*/}
      {/*  className="icon"*/}
      {/*  symbolName={'1.General/2.Icons/2.MailOutlined'}*/}
      {/*/>*/}
      {/*<StepBackwardOutlined*/}
      {/*  className="icon"*/}
      {/*  symbolName={'1.General/2.Icons/2.StepBackwardOutlined'}*/}
      {/*/>*/}
      {/*<StepForwardOutlined*/}
      {/*  className="icon"*/}
      {/*  symbolName={'1.General/2.Icons/2.StepBackwardOutlined'}*/}
      {/*/>*/}
      {/*<StepForwardOutlined />*/}
      {/*<ShrinkOutlined />*/}
      {/*<ArrowsAltOutlined />*/}
      {/*  <DownOutlined />*/}
      {/*  <UpOutlined />*/}
      {/*  <LeftOutlined />*/}
      {/*  <RightOutlined />*/}
      {/*  <CaretUpOutlined />*/}
      {/*  <CaretDownOutlined />*/}
      {/*  <CaretLeftOutlined />*/}
      {/*  <CaretRightOutlined />*/}
      {/*<VerticalAlignTopOutlined />*/}
      {/*<RollbackOutlined />*/}
      {/* 有错误的 SVG */}
      {/*<FastBackwardOutlined />*/}
      {/*<FastForwardOutlined />*/}
      {/*<UpCircleOutlined />*/}
      {/*<DownCircleOutlined />*/}
      {/*<LeftCircleOutlined />*/}
      {/*<RightCircleOutlined />*/}
      {/* 待测试的 SVG*/}
      <DoubleRightOutlined />
      <DoubleLeftOutlined />
      <VerticalLeftOutlined />
      <VerticalRightOutlined />
      <VerticalAlignMiddleOutlined />
      <VerticalAlignBottomOutlined />
      <ForwardOutlined />
      <BackwardOutlined />
      {/*  <EnterOutlined />*/}
      {/*  <RetweetOutlined />*/}
      {/*  <SwapOutlined />*/}
      {/*  <SwapLeftOutlined />*/}
      {/*  <SwapRightOutlined />*/}
      {/*  <ArrowUpOutlined />*/}
      {/*  <ArrowDownOutlined />*/}
      {/*  <ArrowLeftOutlined />*/}
      {/*  <ArrowRightOutlined />*/}
      {/*  <PlayCircleOutlined />*/}
      {/*  <UpSquareOutlined />*/}
      {/*  <DownSquareOutlined />*/}
      {/*  <LeftSquareOutlined />*/}
      {/*  <RightSquareOutlined />*/}
      {/*  <LoginOutlined />*/}
      {/*  <LogoutOutlined />*/}
      {/*  <MenuFoldOutlined />*/}
      {/*  <MenuUnfoldOutlined />*/}
      {/*  <BorderBottomOutlined />*/}
      {/*  <BorderHorizontalOutlined />*/}
      {/*  <BorderInnerOutlined />*/}
      {/*  <BorderOuterOutlined />*/}
      {/*  <BorderLeftOutlined />*/}
      {/*  <BorderRightOutlined />*/}
      {/*  <BorderTopOutlined />*/}
      {/*  <BorderVerticleOutlined />*/}
      {/*  <PicCenterOutlined />*/}
      {/*  <PicLeftOutlined />*/}
      {/*  <PicRightOutlined />*/}
      {/*  <RadiusBottomleftOutlined />*/}
      {/*  <RadiusBottomrightOutlined />*/}
      {/*  <RadiusUpleftOutlined />*/}
      {/*  <RadiusUprightOutlined />*/}
      {/*  <FullscreenOutlined />*/}
      {/*  <FullscreenExitOutlined />*/}
      {/*  <QuestionOutlined />*/}
      {/*  <QuestionCircleOutlined />*/}
      {/*  <PlusOutlined />*/}
      {/*  <PlusCircleOutlined />*/}
      {/*  <PauseOutlined />*/}
      {/*  <PauseCircleOutlined />*/}
      {/*  <MinusOutlined />*/}
      {/*  <MinusCircleOutlined />*/}
      {/*  <PlusSquareOutlined />*/}
      {/*  <MinusSquareOutlined />*/}
      {/*  <InfoOutlined />*/}
      {/*  <InfoCircleOutlined />*/}
      {/*  <ExclamationOutlined />*/}
      {/*  <ExclamationCircleOutlined />*/}
      {/*  <CloseOutlined />*/}
      {/*  <CloseCircleOutlined />*/}
      {/*  <CloseSquareOutlined />*/}
      {/*  <CheckOutlined />*/}
      {/*  <CheckCircleOutlined />*/}
      {/*  <CheckSquareOutlined />*/}
      {/*  <ClockCircleOutlined />*/}
      {/*  <WarningOutlined />*/}
      {/*  <IssuesCloseOutlined />*/}
      {/*  <StopOutlined />*/}
      {/*  <EditOutlined />*/}
      {/*  <FormOutlined />*/}
      {/*  <CopyOutlined />*/}
      {/*  <ScissorOutlined />*/}
      {/*  <DeleteOutlined />*/}
      {/*  <SnippetsOutlined />*/}
      {/*  <DiffOutlined />*/}
      {/*  <HighlightOutlined />*/}
      {/*  <AlignCenterOutlined />*/}
      {/*  <AlignLeftOutlined />*/}
      {/*  <AlignRightOutlined />*/}
      {/*  <BgColorsOutlined />*/}
      {/*  <BoldOutlined />*/}
      {/*  <ItalicOutlined />*/}
      {/*  <UnderlineOutlined />*/}
      {/*  <StrikethroughOutlined />*/}
      {/*  <RedoOutlined />*/}
      {/*  <UndoOutlined />*/}
      {/*  <ZoomInOutlined />*/}
      {/*  <ZoomOutOutlined />*/}
      {/*  <FontColorsOutlined />*/}
      {/*  <FontSizeOutlined />*/}
      {/*  <LineHeightOutlined />*/}
      {/*  <DashOutlined />*/}
      {/*  <SmallDashOutlined />*/}
      {/*  <SortAscendingOutlined />*/}
      {/*  <SortDescendingOutlined />*/}
      {/*  <DragOutlined />*/}
      {/*  <OrderedListOutlined />*/}
      {/*  <UnorderedListOutlined />*/}
      {/*  <RadiusSettingOutlined />*/}
      {/*  <ColumnWidthOutlined />*/}
      {/*  <ColumnHeightOutlined />*/}
      {/*  <AreaChartOutlined />*/}
      {/*  <PieChartOutlined />*/}
      {/*  <BarChartOutlined />*/}
      {/*  <DotChartOutlined />*/}
      {/*  <LineChartOutlined />*/}
      {/*  <RadarChartOutlined />*/}
      {/*  <HeatMapOutlined />*/}
      {/*  <FallOutlined />*/}
      {/*  <RiseOutlined />*/}
      {/*  <StockOutlined />*/}
      {/*  <BoxPlotOutlined />*/}
      {/*  <FundOutlined />*/}
      {/*  <SlidersOutlined />*/}
      {/*  <AndroidOutlined />*/}
      {/*  <AppleOutlined />*/}
      {/*  <WindowsOutlined />*/}
      {/*  <IeOutlined />*/}
      {/*  <ChromeOutlined />*/}
      {/*  <GithubOutlined />*/}
      {/*  <AliwangwangOutlined />*/}
      {/*  <DingdingOutlined />*/}
      {/*  <WeiboSquareOutlined />*/}
      {/*  <WeiboCircleOutlined />*/}
      {/*  <TaobaoCircleOutlined />*/}
      {/*  <Html5Outlined />*/}
      {/*  <WeiboOutlined />*/}
      {/*  <TwitterOutlined />*/}
      {/*  <WechatOutlined />*/}
      {/*  <YoutubeOutlined />*/}
      {/*  <AlipayCircleOutlined />*/}
      {/*  <TaobaoOutlined />*/}
      {/*  <SkypeOutlined />*/}
      {/*  <QqOutlined />*/}
      {/*  <MediumWorkmarkOutlined />*/}
      {/*  <GitlabOutlined />*/}
      {/*  <MediumOutlined />*/}
      {/*  <LinkedinOutlined />*/}
      {/*  <GooglePlusOutlined />*/}
      {/*  <DropboxOutlined />*/}
      {/*  <FacebookOutlined />*/}
      {/*  <CodepenOutlined />*/}
      {/*  <CodeSandboxOutlined />*/}
      {/*  <AmazonOutlined />*/}
      {/*  <GoogleOutlined />*/}
      {/*  <CodepenCircleOutlined />*/}
      {/*  <AlipayOutlined />*/}
      {/*  <AntDesignOutlined />*/}
      {/*  <AntCloudOutlined />*/}
      {/*  <AliyunOutlined />*/}
      {/*  <ZhihuOutlined />*/}
      {/*  <SlackOutlined />*/}
      {/*  <SlackSquareOutlined />*/}
      {/*  <BehanceOutlined />*/}
      {/*  <BehanceSquareOutlined />*/}
      {/*  <DribbbleOutlined />*/}
      {/*  <DribbbleSquareOutlined />*/}
      {/*  <InstagramOutlined />*/}
      {/*  <YuqueOutlined />*/}
      {/*  <AlibabaOutlined />*/}
      {/*  <YahooOutlined />*/}
      {/*  <RedditOutlined />*/}
      {/*  <SketchOutlined />*/}
      {/*  <AccountBookOutlined />*/}
      {/*  <AimOutlined />*/}
      {/*  <AlertOutlined />*/}
      {/*  <ApartmentOutlined />*/}
      {/*  <ApiOutlined />*/}
      {/*  <AppstoreAddOutlined />*/}
      {/*  <AppstoreOutlined />*/}
      {/*  <AudioOutlined />*/}
      {/*  <AudioMutedOutlined />*/}
      {/*  <AuditOutlined />*/}
      {/*  <BankOutlined />*/}
      {/*  <BarcodeOutlined />*/}
      {/*  <BarsOutlined />*/}
      {/*  <BellOutlined />*/}
      {/*  <BlockOutlined />*/}
      {/*  <BookOutlined />*/}
      {/*  <BorderOutlined />*/}
      {/*  <BorderlessTableOutlined />*/}
      {/*  <BranchesOutlined />*/}
      {/*  <BugOutlined />*/}
      {/*  <BuildOutlined />*/}
      {/*  <BulbOutlined />*/}
      {/*  <CalculatorOutlined />*/}
      {/*  <CalendarOutlined />*/}
      {/*  <CameraOutlined />*/}
      {/*  <CarOutlined />*/}
      {/*  <CarryOutOutlined />*/}
      {/*  <CiCircleOutlined />*/}
      {/*  <CiOutlined />*/}
      {/*  <ClearOutlined />*/}
      {/*  <CloudDownloadOutlined />*/}
      {/*  <CloudOutlined />*/}
      {/*  <CloudServerOutlined />*/}
      {/*  <CloudSyncOutlined />*/}
      {/*  <CloudUploadOutlined />*/}
      {/*  <ClusterOutlined />*/}
      {/*  <CodeOutlined />*/}
      {/*  <CoffeeOutlined />*/}
      {/*  <CommentOutlined />*/}
      {/*  <CompassOutlined />*/}
      {/*  <CompressOutlined />*/}
      {/*  <ConsoleSqlOutlined />*/}
      {/*  <ContactsOutlined />*/}
      {/*  <ContainerOutlined />*/}
      {/*  <ControlOutlined />*/}
      {/*  <CopyrightCircleOutlined />*/}
      {/*  <CopyrightOutlined />*/}
      {/*  <CreditCardOutlined />*/}
      {/*  <CrownOutlined />*/}
      {/*  <CustomerServiceOutlined />*/}
      {/*  <DashboardOutlined />*/}
      {/*  <DatabaseOutlined />*/}
      {/*  <DeleteColumnOutlined />*/}
      {/*  <DeleteRowOutlined />*/}
      {/*  <DeliveredProcedureOutlined />*/}
      {/*  <DeploymentUnitOutlined />*/}
      {/*  <DesktopOutlined />*/}
      {/*  <DingtalkOutlined />*/}
      {/*  <DisconnectOutlined />*/}
      {/*  <DislikeOutlined />*/}
      {/*  <DollarCircleOutlined />*/}
      {/*  <DollarOutlined />*/}
      {/*  <DownloadOutlined />*/}
      {/*  <EllipsisOutlined />*/}
      {/*  <EnvironmentOutlined />*/}
      {/*  <EuroCircleOutlined />*/}
      {/*  <EuroOutlined />*/}
      {/*  <ExceptionOutlined />*/}
      {/*  <ExpandAltOutlined />*/}
      {/*  <ExpandOutlined />*/}
      {/*  <ExperimentOutlined />*/}
      {/*  <ExportOutlined />*/}
      {/*  <EyeOutlined />*/}
      {/*  <EyeInvisibleOutlined />*/}
      {/*  <FieldBinaryOutlined />*/}
      {/*  <FieldNumberOutlined />*/}
      {/*  <FieldStringOutlined />*/}
      {/*  <FieldTimeOutlined />*/}
      {/*  <FileAddOutlined />*/}
      {/*  <FileDoneOutlined />*/}
      {/*  <FileExcelOutlined />*/}
      {/*  <FileExclamationOutlined />*/}
      {/*  <FileOutlined />*/}
      {/*  <FileGifOutlined />*/}
      {/*  <FileImageOutlined />*/}
      {/*  <FileJpgOutlined />*/}
      {/*  <FileMarkdownOutlined />*/}
      {/*  <FilePdfOutlined />*/}
      {/*  <FilePptOutlined />*/}
      {/*  <FileProtectOutlined />*/}
      {/*  <FileSearchOutlined />*/}
      {/*  <FileSyncOutlined />*/}
      {/*  <FileTextOutlined />*/}
      {/*  <FileUnknownOutlined />*/}
      {/*  <FileWordOutlined />*/}
      {/*  <FileZipOutlined />*/}
      {/*  <FilterOutlined />*/}
      {/*  <FireOutlined />*/}
      {/*  <FlagOutlined />*/}
      {/*  <FolderAddOutlined />*/}
      {/*  <FolderOutlined />*/}
      {/*  <FolderOpenOutlined />*/}
      {/*  <FolderViewOutlined />*/}
      {/*  <ForkOutlined />*/}
      {/*  <FormatPainterOutlined />*/}
      {/*  <FrownOutlined />*/}
      {/*  <FunctionOutlined />*/}
      {/*  <FundProjectionScreenOutlined />*/}
      {/*  <FundViewOutlined />*/}
      {/*  <FunnelPlotOutlined />*/}
      {/*  <GatewayOutlined />*/}
      {/*  <GifOutlined />*/}
      {/*  <GiftOutlined />*/}
      {/*  <GlobalOutlined />*/}
      {/*  <GoldOutlined />*/}
      {/*  <GroupOutlined />*/}
      {/*  <HddOutlined />*/}
      {/*  <HeartOutlined />*/}
      {/*  <HistoryOutlined />*/}
      {/*  <HomeOutlined />*/}
      {/*  <HourglassOutlined />*/}
      {/*  <IdcardOutlined />*/}
      {/*  <ImportOutlined />*/}
      {/*  <InboxOutlined />*/}
      {/*  <InsertRowAboveOutlined />*/}
      {/*  <InsertRowBelowOutlined />*/}
      {/*  <InsertRowLeftOutlined />*/}
      {/*  <InsertRowRightOutlined />*/}
      {/*  <InsuranceOutlined />*/}
      {/*  <InteractionOutlined />*/}
      {/*  <KeyOutlined />*/}
      {/*  <LaptopOutlined />*/}
      {/*  <LayoutOutlined />*/}
      {/*  <LikeOutlined />*/}
      {/*  <LineOutlined />*/}
      {/*  <LinkOutlined />*/}
      {/*  <Loading3QuartersOutlined />*/}
      {/*  <LoadingOutlined />*/}
      {/*  <LockOutlined />*/}
      {/*  <MacCommandOutlined />*/}
      {/*<MailOutlined />*/}
      {/*  <ManOutlined />*/}
      {/*  <MedicineBoxOutlined />*/}
      {/*  <MehOutlined />*/}
      {/*  <MenuOutlined />*/}
      {/*  <MergeCellsOutlined />*/}
      {/*  <MessageOutlined />*/}
      {/*  <MobileOutlined />*/}
      {/*  <MoneyCollectOutlined />*/}
      {/*  <MonitorOutlined />*/}
      {/*  <MoreOutlined />*/}
      {/*  <NodeCollapseOutlined />*/}
      {/*  <NodeExpandOutlined />*/}
      {/*  <NodeIndexOutlined />*/}
      {/*  <NotificationOutlined />*/}
      {/*  <NumberOutlined />*/}
      {/*  <OneToOneOutlined />*/}
      {/*  <PaperClipOutlined />*/}
      {/*  <PartitionOutlined />*/}
      {/*  <PayCircleOutlined />*/}
      {/*  <PercentageOutlined />*/}
      {/*  <PhoneOutlined />*/}
      {/*  <PictureOutlined />*/}
      {/*  <PlaySquareOutlined />*/}
      {/*  <PoundCircleOutlined />*/}
      {/*  <PoundOutlined />*/}
      {/*  <PoweroffOutlined />*/}
      {/*  <PrinterOutlined />*/}
      {/*  <ProfileOutlined />*/}
      {/*  <ProjectOutlined />*/}
      {/*  <PropertySafetyOutlined />*/}
      {/*  <PullRequestOutlined />*/}
      {/*  <PushpinOutlined />*/}
      {/*  <QrcodeOutlined />*/}
      {/*  <ReadOutlined />*/}
      {/*  <ReconciliationOutlined />*/}
      {/*  <RedEnvelopeOutlined />*/}
      {/*  <ReloadOutlined />*/}
      {/*  <RestOutlined />*/}
      {/*  <RobotOutlined />*/}
      {/*  <RocketOutlined />*/}
      {/*  <RotateLeftOutlined />*/}
      {/*  <RotateRightOutlined />*/}
      {/*  <SafetyCertificateOutlined />*/}
      {/*  <SafetyOutlined />*/}
      {/*  <SaveOutlined />*/}
      {/*  <ScanOutlined />*/}
      {/*  <ScheduleOutlined />*/}
      {/*  <SearchOutlined />*/}
      {/*  <SecurityScanOutlined />*/}
      {/*  <SelectOutlined />*/}
      {/*  <SendOutlined />*/}
      {/*  <SettingOutlined />*/}
      {/*  <ShakeOutlined />*/}
      {/*  <ShareAltOutlined />*/}
      {/*  <ShopOutlined />*/}
      {/*  <ShoppingCartOutlined />*/}
      {/*  <ShoppingOutlined />*/}
      {/*  <SisternodeOutlined />*/}
      {/*  <SkinOutlined />*/}
      {/*  <SmileOutlined />*/}
      {/*  <SolutionOutlined />*/}
      {/*  <SoundOutlined />*/}
      {/*  <SplitCellsOutlined />*/}
      {/*  <StarOutlined />*/}
      {/*  <SubnodeOutlined />*/}
      {/*  <SwitcherOutlined />*/}
      {/*  <SyncOutlined />*/}
      {/*  <TableOutlined />*/}
      {/*  <TabletOutlined />*/}
      {/*  <TagOutlined />*/}
      {/*  <TagsOutlined />*/}
      {/*  <TeamOutlined />*/}
      {/*  <ThunderboltOutlined />*/}
      {/*  <ToTopOutlined />*/}
      {/*  <ToolOutlined />*/}
      {/*  <TrademarkCircleOutlined />*/}
      {/*  <TrademarkOutlined />*/}
      {/*  <TransactionOutlined />*/}
      {/*  <TranslationOutlined />*/}
      {/*  <TrophyOutlined />*/}
      {/*  <UngroupOutlined />*/}
      {/*  <UnlockOutlined />*/}
      {/*  <UploadOutlined />*/}
      {/*  <UsbOutlined />*/}
      {/*  <UserAddOutlined />*/}
      {/*  <UserDeleteOutlined />*/}
      {/*  <UserOutlined />*/}
      {/*  <UserSwitchOutlined />*/}
      {/*  <UsergroupAddOutlined />*/}
      {/*  <UsergroupDeleteOutlined />*/}
      {/*  <VerifiedOutlined />*/}
      {/*  <VideoCameraAddOutlined />*/}
      {/*  <VideoCameraOutlined />*/}
      {/*  <WalletOutlined />*/}
      {/*  <WhatsAppOutlined />*/}
      {/*  <WifiOutlined />*/}
      {/*  <WomanOutlined />*/}
      {/*</Col>*/}
    </Row>
  );
};
export default IconSymbol;
